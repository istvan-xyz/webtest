import { promises, readFileSync } from 'fs';
import { join, parse } from 'path';
import { TestReport } from './reportStructure';

const mkdirp = require('mkdirp');

const { writeFile } = promises;
const template = readFileSync(join(__dirname, 'report.html')).toString();
const reportDir = 'report';

const generateTestReport = async (testFilePath: string, data: TestReport) => {
    const testFilePathParts = parse(testFilePath);
    const testReportFileDir = join(reportDir, testFilePathParts.dir);
    const testReportFilePath = join(testReportFileDir, `${testFilePathParts.name}.html`);
    await mkdirp(testReportFileDir);
    let reportContent = '';

    for (const test of data.items) {
        reportContent += `
    <h2>${test.name}</h2>
`;
        for (const testItem of test.items) {
            switch (testItem.type) {
            case 'error':
                reportContent += `
        <h3>Error</h3>
        <pre>${testItem.error}</pre>
        ${testItem.errorScreenshot ? `
        <img
            style="max-width: 10rem;"
            src="data:image/error.png;base64,${testItem.errorScreenshot}"
        />
        ` : ''}
            `;
                break;
            case 'step':
                reportContent += `
        <h3>${testItem.name}</h3>
        ${testItem.screenshotBefore ? `
        <img
            style="max-width: 10rem;"
            src="data:image/${Math.random()}.png;base64,${testItem.screenshotBefore}"
        />
        ` : ''}
        ${testItem.screenshotAfter ? `
        <img
            style="max-width: 10rem;"
            src="data:image/${Math.random()}.png;base64,${testItem.screenshotAfter}"
        />
        ` : ''}
        ${testItem.error ? `
        <pre>${testItem.error.stack}</pre>
        ` : ''}
        ${testItem.errorScreenshot ? `
        <img
            style="max-width: 10rem;"
            src="data:image/error.png;base64,${testItem.errorScreenshot}"
        />
        ` : ''}
                `;
                break;
            default:
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                throw new Error(`Unhandled type ${(testItem as any).type}`);
            }
        }
    }

    await writeFile(
        testReportFilePath,
        template
            .replace('<title>', `<title>${data.name}`)
            // eslint-disable-next-line max-len
            .replace('</head>', '\n\n</head>')
            .replace('<body>', `<body>\n${reportContent}\n`),
    );
};

export default generateTestReport;