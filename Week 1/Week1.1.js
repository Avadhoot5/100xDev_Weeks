// 3 step process to solve star pattern 

// 1. Identify the number of rows = no of lines (rows = outer for loop will run)  
// 2. Identify for every row no - 
    // how many col's are there 
    // types of element in col's
// 3. What do you need to print



// Assignment 1

// 1. Sum from 1 to 100
// 2. fibonaaci series
// 3. pattern creation
// 4. leetcode
// 1. Sum from 1 to 100

function sum(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum = sum + i;
    }
    return sum;
}

function altSum(limit) {
    return ((limit)*(1+limit)) / 2;
}
// console.log(sum(100));
// console.log(altSum(100));

// fibonaaci series formulae: Fn = Fn-1 + Fn-2

function fibonacci(n) {
    if (n <= 1)
        return n;
    else
        return fibonacci(n-1) + fibonacci(n-2);
}
// console.log(fibonacci(10));

// 3. pattern creation

// let limit = 5;
// for (let i = 0; i <= limit; i++) {
//     for (let j = 1; j <= i; j++)
//         console.log('*');
// }

// 4. Leet Code - 3 ques (easy)

// 15 Star Pattern Ques for JS 

// 1. Square Star Pattern 

function singleRow(row) {
    str = '';
    for (let i = 0; i < row; i++)
        str = str + '*';
    for (let j = 0; j < row; j++){
        console.log(str);
    }
}
// singleRow(5);

// 2. Left Triangle Pattern 

function leftTriangle(row) {
    str = '';
    for (let i = 0; i < row; i++){
        str = str + '*';
        console.log(str);
    }
}
// leftTriangle(5);

// 3. Hollow Square Pattern 

function hollowSquare(n) {
    for (let i = 0; i < n; i++){
        if (i === 0 || i === n-1){
            for (let j = 0; j < n; j++){
                process.stdout.write('*');
            }
        } else {
            for (let k = 0; k < n; k++){
                if (k === 0 || k === n-1)
                    process.stdout.write('*');
                else {
                    process.stdout.write(' ');
                }
            }
        }
        process.stdout.write('\n');
    }
}
// hollowSquare(5);

// 4. right triangle pattern

function rightTri(n) {
    for (let i = 1; i <= n; i++){
        for (let j = 0; j < n-i; j++){
            process.stdout.write(' ');
        }
        for (let k = 0; k < i; k++){
            process.stdout.write('*');
        }
    console.log();
    }
}

// rightTri(5);

// function sum(index1, index2) {
//     return index1 + index2;
// }
// function multiply(index1, index2) {
//     return index1 * index2;
// }
// function divide(index1, index2) {
//     return index1 / index2;
// }
// function doArithmetic(firstEL, secondEl, arithmeticFunc) {
//     return arithmeticFunc(firstEL, secondEl);
// }
// let result = doArithmetic(23,52,multiply);
// console.log(result);

// function starryPattern(n) {
//     let str = '';
//     for (let i = 0; i < n ; i++) {
//         for (let j = 0; j < i+1; j++){
//             str = str + '**';
//         }
//         str += '\n';
//     }
//     console.log(str);
// }

// starryPattern(5);

// *
// **
// * *
// *  *
// *   *
// ******
// Hollow Triangle Star Pattern

function star(n) {
    let str = '';
    for (let i = 0; i < n; i++){
        str = str + '*';
        if (i < 2 || i === n-1){
            process.stdout.write(str);
        }
        else {
            if (i > 1 || i < n-1){
                let space = '';
                for (let j = 1; j < i; j++){
                    space = space + ' ';
                }
            process.stdout.write(str[0] + space + str[0]);
            }
        }
       
    console.log();
    }   
}

// star(7);

function pattern5(n) {
    for (let i = 0; i < (2*n)-1; i++){
        if (i < n){
            for (let j = 0; j < i+1; j++){
                process.stdout.write('*');
            }
        } else {
            if (i >=n){
                for (let k = 1; k < (2*n)-i; k++){
                    process.stdout.write('*');
                }
            }
        }
        console.log();
    }
}

// pattern5(5);

// Javascript Pyramid Pattern

//     *
//    ***
//   *****
//  *******
// *********

function pyramid(n) {
    for (let i = 1; i <= n; i++){
        for (let j = 0; j < n-i; j++){
            process.stdout.write(' ');
        }
        for (let k = 0; k < (2*i)-1; k++){
            process.stdout.write('*');
        }
        console.log();
    }
}

// pyramid(5);

function revpyramid(n) {
    for (let i = 0; i <= n-1; i++){
        for (let j = 0; j < i; j++){
            process.stdout.write(' ');
        }
        for (let k = 0; k < (2*(n-i)) -1; k++){
            process.stdout.write('*');
        }
        console.log();
    }
}
   
// revpyramid(5);

// spaces = 2*i - 1

function holloPyramid(n) {
    let space = '';
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n-i; j++){
            process.stdout.write(' ');
        }
        for (let star = 0; star < (2*i)-1; star++){
            if (i === 1 || i === n){
                process.stdout.write('*');
            }
            else {
                if (star === 0 || star === (2*i)-2) {
                    process.stdout.write('*');
                }
                else {
                    process.stdout.write(' ');
                }
            }
        }
        console.log();
    }
}

// holloPyramid(5);

function diamond(n) {
    // upward pyramid
    for (let i = 1; i < n; i++){
        for (let j = 0; j < n-i; j++){
            process.stdout.write(' ');
        }
        for (let k = 0; k < (2*i)-1; k++){
            if (k === 0 || k === ((2*i)-1)-1){
                process.stdout.write('*');
            }
            else {process.stdout.write(' ')};
        }
        console.log();
    }
    // downward pyramid
    for (let i = 1; i <= n; i++){
        for (let k = 1; k < i; k++){
            process.stdout.write(' ');
        }
        for (let j = 0; j < (2*(n-i)+1); j++){
            if (j === 0 || j === (2*(n-i)+1)-1){
                process.stdout.write('*');
            }
            else {process.stdout.write(' ')};
        }
        console.log();
    }
}

// diamond(5);

// hourglass Star Pattern

function hourGlass(n) {
    for (let i = 1; i < n; i++){
        for (let j = 1; j < i; j++){
            process.stdout.write(' ');
        }
        for (let k = 0; k < (2*(n-i)+1); k++){
            process.stdout.write('*');
        }
        console.log();
    }
    for (let i = 1; i <= n; i++){
        for (let j = 0; j < n-i; j++){
            process.stdout.write(' ');
        }
        for (let k = 0; k < (2*i)-1; k++){
            process.stdout.write('*');
        }
        console.log();
    }
}

// hourGlass(5);

function rightPas(n) {
    for (let i = 1; i <= (2*n)-1; i++) {
        if (i <= n) {
            for (let j = 0; j < i; j++) {
                process.stdout.write('*');
            }
        } else 
            for (let k = 0; k < (2*n)-i; k++) {
                process.stdout.write('*');
            }
        console.log();
    }
}

// rightPas(5);

function leftPas(n) {
    for (let i = 1; i <= (2*n)-1; i++) {
        if (i <= n) {
            for (let space = 0; space < n-i; space++){
                process.stdout.write(' ');
            }
            for (let j = 0; j < i; j++) {
                process.stdout.write('*');
            }
        } else {
            for (let space = n; space < i; space++){
                process.stdout.write(' ');
            }
            for (let k = 0; k < (2*n)-i; k++) {
                process.stdout.write('*');
            }
        }
        console.log();
    }
}

// leftPas(5);

function heartStar(n) {
    //heart UP side
    for (let i = 1; i < (n/2); i++){
        for (let j = 1; j < (n/2)-i; j++){
            process.stdout.write(' ');
        }
        for (startStar = 0; startStar < (2*i)+1; startStar++){
                process.stdout.write('*');
        }
        for (let midSpace = 0; midSpace < n-((2*i)+1); midSpace++){
            process.stdout.write(' ');
        }
        for (let endStar = 0; endStar < (2*i)+1; endStar++){
            process.stdout.write('*');
    }
        console.log();
    }
    //heart down side
        for (let i = 1; i <= n; i++){
            for (let j = 1; j < i; j++){
                process.stdout.write(' ');
            }
            for (let k = 0; k < (2*(n-i)+1); k++){
                process.stdout.write('*');
            }
            console.log();
        }
}

// heartStar(6);


//  ***   ***
// ***** *****
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

//    spaces STAR spaces STAR   iteration
    // 1       3   3       3    1 
    // 0       5   1       5    2

// stars = 2 * iteration + 1
// midspace = n - (2*i)+1

function numberP(n) {
    // upward pyramid
    for (let i = 1; i < n; i++) {
        for (let space = 1; space <= n-i; space++) {
            process.stdout.write(' ');
        }
        for (let j = i; j >= 1; j--) {
            process.stdout.write(j.toString());
        }
        for (let k = 2; k <= i; k++){
            process.stdout.write(k.toString());
        }
        console.log();
    }
    // downward pyramid
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            process.stdout.write(' ');
        }
        for (let k = (n-i)+1; k >= 1; k--) {
            process.stdout.write(k.toString());
        }
        for (let end = 2; end <= (n-i)+1; end++) {
            process.stdout.write(end.toString());
        }
        console.log();
    }

}

// numberP(5);

function squNum(n) {
    let ogN = n;
    n = 2*n-1;
    for (let i = 0; i <= n ; i++) {
        for (let j = 0; j <= n; j++) {
            let everyIndex = ogN - Math.min(Math.min(i, j), Math.min(n-i, n-j));
            process.stdout.write(everyIndex.toString() + ' ');
        }
        console.log();
    }
}

// squNum(4);

// Reading From a file

// const fs = require('fs');

// function sum(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// function fileRead(err, fileContent) {
//     if (err) {
//         console.log("File not found");
//     }
//     console.log("File is read, Final ans: " + sum(fileContent));
// }

// fs.readFile("value.txt", "utf8", fileRead); //here this code gets executed at last
// // below tasks get executed first, then fileRead is called
// // console.log("Hello");
// // console.log(sum(52));
// // console.log(sum(50));

// const fs = require('fs');

// function write() {
//     return "Test message new";
// }

// const data = write();

// fs.writeFileSync("new.txt", data);


// function count(fe, le) {
//     let sum = 0;
//     for (let i = fe; i <= le; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(count(1,1000000));

// setTimeout(function() {
//     console.log("10 seconds have passed");
// }, 10 * 1000);

function star(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n-i; j++) {
            process.stdout.write(' ');
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write('*');
        }
        console.log();
    }
}

// star(5);

// function design(n) {
//     for (let i = 1; i <= (2*n)-1; i++) {
//         let spaceCondition = i < n ? n-i : i-n;
//         let starCondition = i > n ? 2*((2*n)-i)-1: (2*i)-1;
//         for (let sp = 1; sp <= spaceCondition; sp++) {
//             process.stdout.write(' ');
//         }
//         for (let j = 1; j <= starCondition; j++) {
//             process.stdout.write('*');
//         }
//         console.log(); 
//     }
// }

// design(5);

// Reading From a file

// const fs = require('fs');

// function sum(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// function fileRead(err, fileContent) {
//     if (err) {
//         console.log("File not found");
//     }
//     console.log("File is read, Final ans: " + sum(fileContent));
// }

// fs.readFile("value.txt", "utf8", fileRead); //here this code gets executed at last
// // below tasks get executed first, then fileRead is called
// console.log("Hello");
// console.log(sum(52));
// console.log(sum(50));

// function complex(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans = ans + 1;
//     }
//     return ans;
// }

// let newans = complex(50000000);
// console.log(newans);

// setTimeout(function() {
//     console.log("3 seconds have passed")
// }, 3 * 1000);


