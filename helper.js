let height = 50;
let e = 0.5;
let g = 9.8;

let arr = [{ 'h': 50, 't': 0 }];
let t = 0

let keep = true;
setTimeout(function () {
    keep = false;
}, 10);

while(keep === true)
{
    console.log('egth');
}

// while (height > 0) {
//     if (e >= 1) {
//         break;
//     }
//     let v = Math.sqrt(2 * g * height);
//     t = t + parseFloat((v / g).toFixed(1));
//     let temp = { 'h': 0, 't': t };
//     arr.push(temp);
//     height = (e * e * height).toFixed(0);
//     t = t + parseFloat((e * v / g).toFixed(1));
//     temp = { 'h': height, 't': t };
//     arr.push(temp);
// }

arr.map(h => console.log(h));