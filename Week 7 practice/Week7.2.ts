// export function sum(a:number, b: number): number {
//     return a + b;
// }

// let ans = sum(2,5);
// console.log("test");
// console.log(ans);

// Interface extend
interface PersonGenderProperties {
    gender: string,
    height: number,
    weight: number
}

// PersonGenderProperties can be reused using extends property. all the property are added to the Person interface.

interface Person extends PersonGenderProperties{
    name: string,
    age: number
}

function greetUser(person: Person): string {
    return `Hello mr ${person.name} you are ${person.age} years old!`
}

console.log(greetUser({
    name: "unknown",
    age: 23,
    gender: "Male",
    height: 6,
    weight: 65
}));

// type declaration

type PersonNew = {
    name: string;
    age: number;
}

function greetPerson(name: string, age: number): string {
    return `Hello ${name} your age is: ${age}`
}

console.log(greetPerson("testName", 23))


