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
    const testReportMetaFilePath = join(testReportFileDir, `${testFilePathParts.name}.json`);
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
        <pre class="failure">${testItem.error}</pre>
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
        ${testItem.screenshotAfter ? `
        <img
            class="thumbnail"
            style="max-width: 10rem;"
            src="data:image/${Math.random()}.png;base64,${testItem.screenshotAfter}"
        />
        ` : ''}
        ${testItem.error ? `
        <pre class="failure">${testItem.error.stack}</pre>
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

    reportContent = `
    <div class="sidebar">
        ${reportContent}
    </div>
    <div class="main">
    </div>
    `;

    await Promise.all([
        writeFile(
            testReportMetaFilePath,
            JSON.stringify(data, null, 4),
        ),
        writeFile(
            testReportFilePath,
            template
                .replace('<title>', `<title>${data.name}`)
            // eslint-disable-next-line max-len
            // .replace('</head>', `\n${header}\n</head>`)
                .replace('<body>', `<body>\n${reportContent}\n`),
        ),
    ]);
};

export default generateTestReport;