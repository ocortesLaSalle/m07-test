const constants = require('../config/constants');

module.exports.getTable2 = async function(req, res) {
    const responseObj = getTableX(2);
    return res.status(responseObj.status).send(responseObj);
}
module.exports.getTable3 = async function(req, res) {
    const responseObj = getTableX(3);
    return res.status(responseObj.status).send(responseObj);
}
module.exports.getTable4 = async function(req, res) {
    const responseObj = getTableX(4);
    return res.status(responseObj.status).send(responseObj);
}
module.exports.getTable5 = async function(req, res) {
    const responseObj = getTableX(5);
    return res.status(responseObj.status).send(responseObj);
}

function getTableX(number) {
    const multTable = {};

    for (let x = 1; x < 10; x++) {
        multTable[`${number}x${x}`] = number*x;
    }

    return {
        status: constants.httpStatus.ok,
        result: multTable
    };
}