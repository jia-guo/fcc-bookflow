let express = require("express");

let twoSumRouter = express.Router();
const data = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30
];

twoSumRouter.route("/:target").get((req, res) => {
    let { target } = req.params;
    let [left, right] = [0, data.length - 1];
    let results = [];
    while (left < right) {
        if (data[left] + data[right] == target) {
            results.push([left, right]);
            left++;
            right--;
        } else if (data[left] + data[right] < target) {
            left++;
        } else {
            right--;
        }
    }
    res.json(results);
});
module.exports = twoSumRouter;
