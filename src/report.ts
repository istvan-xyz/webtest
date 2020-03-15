import { join, parse } from 'path';
import { promises, readFileSync } from 'fs';
import { Page, BrowserContext } from 'playwright';

const mkdirp = require('mkdirp');

const { writeFile } = promises;
const template = readFileSync(join(__dirname, 'report.html')).toString();

export class TestReportGenerator {
    private reportContent = '';
    private readonly page: Page;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(page: Page, browser: BrowserContext) {
        this.page = page;
    }

    addMainTitle(title: string) {
        this.reportContent += `<h1>${title}</h1>`;
    }

    async recordError(error: Error) {
        this.reportContent += '<h2>Error</h2>';
        const screenshot = await this.page.screenshot();
        this.reportContent += `<pre>${error.stack}</pre>`;
        this.reportContent += `
            <img style="max-width: 10rem;" src="data:image/error.png;base64,${screenshot.toString('base64')}" />
        `;
    }

    async beginStep(name: string) {
        this.reportContent += `<h2>${name}</h2>`;
        const screenshot = await this.page.screenshot();
        this.reportContent += `
            <img
                style="max-width: 10rem;"
                src="data:image/${Math.random()}.png;base64,${screenshot.toString('base64')}"
            />
        `;
    }

    async endStep() {
        const finishedScreenshot = await this.page.screenshot();
        this.reportContent += `
            <img style="max-width: 10rem;" src="data:image/${Math.random()}.png;base64,${
    finishedScreenshot.toString('base64')}" />
        `;
    }

    async fetchContent() {
        return this.reportContent;
    }
}

export class TestFileGenerator {
    private readonly testFilePath: string;
    private readonly relativeTestFilePath: string;
    private tests: TestReportGenerator[] = [];

    constructor(relativeTestFilePath: string, testFilePath: string) {
        this.relativeTestFilePath = relativeTestFilePath;
        this.testFilePath = testFilePath;
    }

    addTest(test: TestReportGenerator) {
        this.tests.push(test);
    }

    async save() {
        await mkdirp(parse(this.testFilePath).dir);
        await writeFile(
            this.testFilePath,
            template
                .replace('<title>', `<title>${this.relativeTestFilePath}`)
                .replace('<body>', `<body>\n${
                    (await Promise.all(this.tests.map(async item => item.fetchContent()))).join('\n')}`),
        );
    }
}