const g = 10;


module.exports.getData = (req, res, next) => {
    res.status(200).json(
        {
            response: 'data from the database'
        });
}


module.exports.makePredict = (req, res, next) => {
    let { height, e } = req.body;
    let arr = [{ 'height': height, 'time': 0 }];
    let t = 0;
    let bounce = 0;
    while (height > 0) {
        if (e >= 1) {
            res.status(200).json(
                {
                    response: 'bad value for the e'
                });
            break;
        }
        let v = Math.sqrt(2 * g * height);
        t = t + parseFloat((v / g).toFixed(1));
        let temp = { 'height': 0, 'time': t };
        arr.push(temp);
        height = (e * e * height).toFixed(0);
        if (height == 0) break;
        t = t + parseFloat((e * v / g).toFixed(1));
        bounce++;
        temp = { 'height': height, 'time': t };
        arr.push(temp);
    }

    res.status(200).json(
        {
            response: 'done calculation',
            bounce: bounce,
            data: arr
        })
}


// add Bad Request
module.exports.badReq = (req, res, next) => {
    res.status(404).json(
        {
            response: 'bad request'
        });
}