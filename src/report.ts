import { Page } from 'playwright';
import { TestReportItem, TestReportStep, TestReportTest, TestReport } from './reportStructure';
import generateTestReport from './generateTestReport';

export class TestCaseCollector {
    private readonly page: Page;
    private readonly name: string;
    private items: TestReportItem[] = [];
    private currentStep?: TestReportStep;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor({ page, testName }: { page: Page; testName: string }) {
        this.name = testName;
        this.page = page;
    }

    async recordError(error: Error) {
        const screenshot = await this.page.screenshot();
        if (this.currentStep) {
            this.currentStep.error = error;
            this.currentStep.errorScreenshot = screenshot.toString('base64');
        } else {
            this.items.push({
                type: 'error',
                error: `${error.message}\n${error.stack}`,
                errorScreenshot: screenshot.toString('base64'),
            });
        }
    }

    async beginStep(name: string) {
        if (this.currentStep) {
            throw new Error('Step already exists');
        }
        const screenshot = await this.page.screenshot();
        this.currentStep = {
            type: 'step',
            name,
            screenshotBefore: screenshot.toString('base64'),
        };
        this.items.push(this.currentStep);
    }

    async endStep() {
        this.currentStep!.screenshotAfter = (await this.page.screenshot()).toString('base64');
        this.currentStep = undefined;
    }

    getData(): TestReportTest {
        return {
            type: 'test',
            name: this.name,
            items: this.items,
        };
    }
}

const generateReportData = (relativeTestFilePath: string, tests: TestCaseCollector[]): TestReport => ({
    name: relativeTestFilePath,
    items: tests.map(item => item.getData()),
});

export class TestFileDataCollector {
    private readonly relativeTestFilePath: string;
    private tests: TestCaseCollector[] = [];

    constructor(testFilePath: string) {
        const relativeTestFilePath = testFilePath.replace(process.cwd(), '').substr(1);
        this.relativeTestFilePath = relativeTestFilePath;
    }

    addTest(test: TestCaseCollector) {
        this.tests.push(test);
    }

    async save() {
        const reportData = generateReportData(this.relativeTestFilePath, this.tests);
        await generateTestReport(this.relativeTestFilePath, reportData);
    }
}