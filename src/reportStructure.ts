export interface TestReport {
    name: string;
    items: TestReportTest[];
}

export interface TestReportTest {
    type: 'test';
    name: string;
    items: TestReportItem[];
}

export type TestReportItem = TestReportStep | TestReportError;

export interface TestReportStep {
    type: 'step';
    name: string;
    screenshotBefore?: string;
    screenshotAfter?: string;
    error?: Error;
    errorScreenshot?: string;
}

export interface TestReportError {
    type: 'error';
    error: string;
    errorScreenshot?: string;
}