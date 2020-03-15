import { Page, BrowserContext } from 'playwright';

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