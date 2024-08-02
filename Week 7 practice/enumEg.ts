enum Arithmetic {
    Add,
    Sub,
    Div,
    Mul
}

function calculate(a: number, b: number, type: Arithmetic) {
    // 
    console.log(type);
    return 1;
}

const ans = calculate(32,32, Arithmetic.Mul);
console.log(ans);

