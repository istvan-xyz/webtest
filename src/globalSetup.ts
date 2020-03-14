const rimraf = require('rimraf');

const reportDir = `${process.cwd()}/report`;

module.exports = () => {
    rimraf.sync(reportDir);
};