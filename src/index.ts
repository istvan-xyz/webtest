import { chromium, Page, BrowserContext } from 'playwright';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserContextOptions } from 'playwright-core/lib/browserContext';
import { dirname, join } from 'path';
import { promises, readFileSync } from 'fs';

export { Page } from 'playwright';

const mkdirp = require('mkdirp');

const { writeFile } = promises;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jestTest = (global as any).test;

const reportDir = `${process.cwd()}/report`;

const template = readFileSync(join(__dirname, 'report.html')).toString();

export interface TestContext {
    page: Page;
    browser: BrowserContext;
}

interface TestState {
    currentStep?: string;
    reportContent: string;
}

const stateMap = new Map<TestContext, TestState>();

const reportsSetup: string[] = [];

interface LaunchOptions {
    headless?: boolean;
    args?: string[];
    devtools?: boolean;
    slowMo?: number;
}

let launchOptions: LaunchOptions = {};

export const setLaunchOptions = (options: LaunchOptions) => {
    launchOptions = options;
};

let browserContextOptions: BrowserContextOptions = { viewport: { width: 1440, height: 900 } };

export const setBrowserContextOptions = (options: BrowserContextOptions) => {
    browserContextOptions = options;
};

const browserTest = (name: string, fn: (context: TestContext) => Promise<void>) => {
    const spec = jestTest(name, async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const testFilePath = (spec as any).result.testPath;
        const relativeTestFilePath = testFilePath.replace(process.cwd(), '').substr(1);
        const relativeTestFileDir = dirname(relativeTestFilePath);
        const absoluteTestFileDir = join(reportDir, relativeTestFileDir);
        await mkdirp(absoluteTestFileDir);
        const browser = await chromium.launch(launchOptions);
        const browserContext = await browser.newContext(browserContextOptions);
        const page = await browserContext.newPage();
        await page.setViewportSize({
            width: 1440, height: 900,
        });
        const context: TestContext = { page, browser: browserContext };
        const state = {
            reportContent: '',
        };

        stateMap.set(context, state);

        state.reportContent += `<h1>${name}</h1>`;

        try {
            await fn(context);
        } catch (error) {
            // console.log('Failure detected, screenshotting...');
            state.reportContent += '<h2>Error</h2>';
            const screenshot = await page.screenshot();
            state.reportContent += `<pre>${error.stack}</pre>`;
            state.reportContent += `<img src="data:image/error.png;base64,${screenshot.toString('base64')}" />`;
            throw error;
        } finally {
            await browser.close();
        }
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const testFilePath = (spec as any).result.testPath;
    const relativeTestFilePath = testFilePath.replace(process.cwd(), '').substr(1);
    const relativeTestFileDir = dirname(relativeTestFilePath);
    const absoluteTestFileDir = join(reportDir, relativeTestFileDir);
    if (!reportsSetup.includes(testFilePath)) {
        reportsSetup.push(testFilePath);
        // eslint-disable-next-line no-undef
        afterAll(async () => {
            await mkdirp(absoluteTestFileDir);
            await writeFile(
                join(absoluteTestFileDir, 'index.html'),
                template
                    .replace('<title>', `<title>${relativeTestFilePath}`)
                    .replace('<body>', `<body>\n${Array.from(stateMap.values())
                        .map(({ reportContent }) => reportContent).join('\n')}`),
            );
        });
    }
};

export const step = async (name: string, context: TestContext, fn: () => Promise<void>) => {
    const state = stateMap.get(context);
    if (!state) {
        throw new Error('Failed to get state');
    }

    state.currentStep = name;
    state.reportContent += `<h2>${name}</h2>`;
    const screenshot = await context.page.screenshot();
    state.reportContent += `<img src="data:image/${Math.random()}.png;base64,${screenshot.toString('base64')}" />`;

    const result = await fn();

    const finishedScreenshot = await context.page.screenshot();
    state.reportContent += `<img src="data:image/${Math.random()}.png;base64,${
        finishedScreenshot.toString('base64')}" />`;
    state.currentStep = undefined;

    return result;
};

export const sleep = async (duration: number) => new Promise(resolve => {
    setTimeout(resolve, duration);
});

export const test = browserTest;