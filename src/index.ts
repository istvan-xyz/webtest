import { chromium, Page, BrowserContext } from 'playwright';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserContextOptions } from 'playwright-core/lib/browserContext';
import { TestReportGenerator, TestFileGenerator } from './report';

export { Page } from 'playwright';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jestTest = (global as any).test;

export interface TestContext {
    page: Page;
    browser: BrowserContext;
    report: TestReportGenerator;
}

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

const testReports: TestReportGenerator[] = [];

const browserTest = (name: string, fn: (context: TestContext) => Promise<void>) => {
    const spec = jestTest(name, async () => {
        const browser = await chromium.launch(launchOptions);
        const browserContext = await browser.newContext(browserContextOptions);
        const page = await browserContext.newPage();
        await page.setViewportSize({
            width: 1440, height: 900,
        });
        const context: TestContext = {
            page,
            browser: browserContext,
            report: new TestReportGenerator(page, browserContext),
        };

        testReports.push(context.report);

        context.report.addMainTitle(spec.getFullName());

        try {
            await fn(context);
        } catch (error) {
            // console.log('Failure detected, screenshotting...');
            await context.report.recordError(error);
            throw error;
        } finally {
            await browser.close();
        }
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const testFilePath = (spec as any).result.testPath;
    if (!reportsSetup.includes(testFilePath)) {
        reportsSetup.push(testFilePath);
        const testReport = new TestFileGenerator(testFilePath);

        // eslint-disable-next-line no-undef
        afterAll(async () => {
            for (const test of testReports) {
                testReport.addTest(test);
            }
            await testReport.save();
        });
    }
};

export const step = async (name: string, { report }: TestContext, fn: () => Promise<void>) => {
    await report.beginStep(name);
    const result = await fn();
    await report.endStep();
    return result;
};

export const sleep = async (duration: number) => new Promise(resolve => {
    setTimeout(resolve, duration);
});

export const test = browserTest;