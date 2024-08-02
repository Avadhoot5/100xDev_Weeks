"use strict";
// export function sum(a:number, b: number): number {
//     return a + b;
// }
function greetUser(person) {
    return `Hello mr ${person.name} you are ${person.age} years old!`;
}
console.log(greetUser({
    name: "unknown",
    age: 23,
    gender: "Male",
    height: 6,
    weight: 65
}));
function greetPerson(name, age) {
    return `Hello ${name} your age is: ${age}`;
}
console.log(greetPerson("testName", 23));
