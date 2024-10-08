"use strict";
// type NumberArr = number[];
// function getFirstElement(arr : NumberArr):number {
//     return arr[0];
// }
// let ans = getFirstElement([1,2,3]);
// console.log(ans);
// #1. Decent but not great 
// type NumString = (number | string)[];
// function getFirstElement(arr : NumString): (number | string) {
//     return arr[0];
// }
// let ans = getFirstElement([1,2,3]);
// let ans1 = getFirstElement(["one", "two","three"]);
// console.log(ans);
// console.log(ans1);
// ans1.toLowerCase(); - cant apply lowercase property since it complains having 
// number or string as input.
// #2. Better approach
// type User = {
//     name: string,
//     age: number
// }
// Here T is generic, which means whatever input type it gets it returns the same type for the output.
// function getFirstElement<T>(arr : T[]) {
//     return arr[0];
// }
// let ans = getFirstElement<number>([1,2,3]);
// let ans1 = getFirstElement<string>(["one", "two","three"]);
// let ans3 = getFirstElement<User>([{
//     name: "test",
//     age: 30
// }, {
//     name: "test",
//     age: 30
// }]);
// console.log(ans);
// console.log(ans1);
// Assignment #2 
function swap(a, b) {
    return [b, a];
}
const ans = swap(1, 2);
const ans1 = swap("hello", "world");
const ans2 = swap(true, false);
console.log(ans);
console.log(ans1);
console.log(ans2);
