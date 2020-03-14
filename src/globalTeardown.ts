import { promises, readFileSync } from 'fs';
import { join } from 'path';

const { readdir, stat, writeFile } = promises;

const reportDir = `${process.cwd()}/report`;

const template = readFileSync(join(__dirname, 'report.html')).toString();

const walk = async (basePath: string, path = '') => {
    const fullPath = join(basePath, path);
    const files = await readdir(fullPath);
    let result: string[] = [...files.map(item => join(path, item))];

    for (const file of files) {
        const fullFilePath = join(fullPath, file);
        const fileStat = await stat(fullFilePath);
        if (fileStat.isDirectory()) {
            result = [
                ...result,
                ...(await walk(basePath, join(path, file))),
            ];
        }
    }

    return result;
};

export default async () => {
    const files = await walk(reportDir);

    await writeFile(
        join(reportDir, 'index.html'),
        template
            .replace('<title>', '<title>Test report')
            .replace('<body>', `<body>\n<ul>\n${
                files
                    .filter(file => file.endsWith('.html'))
                    .map(file => `<li><a href="${file}">${file}</a></li>`)
                    .join('\n')
            }\n</ul>`),
    );
};