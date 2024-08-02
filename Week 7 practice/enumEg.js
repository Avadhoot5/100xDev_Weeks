"use strict";
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Sub"] = 1] = "Sub";
    Arithmetic[Arithmetic["Div"] = 2] = "Div";
    Arithmetic[Arithmetic["Mul"] = 3] = "Mul";
})(Arithmetic || (Arithmetic = {}));
function calculate(a, b, type) {
    // 
    console.log(type);
    return 1;
}
const ans = calculate(32, 32, Arithmetic.Mul);
console.log(ans);
