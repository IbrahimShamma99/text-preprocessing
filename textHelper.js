const preprocessor = require("./src/index");

const q1 = "blue jeans";
const q2 = "white jeans";

const q1Obj = preprocessor.helper.breakText(q1);
const q2Obj = preprocessor.helper.breakText(q2);

console.log(q1Obj);
console.log(q2Obj);
