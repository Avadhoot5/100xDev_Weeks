let age: number = 20;

if (age < 50)
    age += 10;

console.log(age);

// below we have not declared types.

// let sales = 245323;
// let course = 'typescript';
// let is_publised = true;
// let level;

let sales: number = 245323;
let course: string = 'typescript';
let is_publised: boolean = true;
let level; //any type

// any type 
function render(document : any) {
    console.log(document);
}

// array 
let numbers: number[] = [1,2,32];

// tuples
let users: [number, string] = [2, "testUser"];
// users.push(3);

// enums
enum Size {Small = 1, Medium, Large}

const mySize: Size = Size.Medium;
// console.log(mySize);

// functions 

function calculateTax(income: number): number {
    if (income < 50000)
        return income * 1.2;
    else return 0;
}

// Objects

type EmployeeParams = {
    readonly id: number,
    name: string
}

let employee: EmployeeParams = {
    id: 1,
    name: 'test'
};

// employee.id = 2;






