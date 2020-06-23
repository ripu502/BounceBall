module.exports.getData = (req, res, next) => {
    res.send('hello')
}


// add Bad Request
module.exports.badReq = (req, res, next) => {
    res.send('bad req')
}