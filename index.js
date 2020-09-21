const { add } = require("./moduleCalculator/calculator");
const calculator = require("./moduleCalculator/calculator");

console.log("--- Calculator Module Test ---");
console.log("Operation a) 1 + 1 = ", calculator.add(1, 1));
console.log("Operation b) -123 + 123123 = ", calculator.add(-123, 123123));
console.log("Operation c) 8 * 0 = ", calculator.mul(8, 0));
console.log("Operation d) 1239123 * 12313 = ", calculator.mul(1239123, 12313));
console.log("Operation e) 123 / -12 = ", calculator.div(123, -12));
console.log("Operation f) 313123 / 0 = ", calculator.div(313123, 0));
console.log("--- Test Finished ---")


// console.log(calculator.add(123.6,"2.5"));
// console.log(calculator.sub(0,"2.5"));
// console.log(calculator.mul(2,"2.5"));
// console.log(calculator.div(0,"0"));