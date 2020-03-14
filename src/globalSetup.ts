import rimraf from 'rimraf';

const reportDir = `${process.cwd()}/report`;

module.exports = () => {
    rimraf.sync(reportDir);
};