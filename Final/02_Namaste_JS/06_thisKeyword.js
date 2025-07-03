// this keyword 

"use strict";

console.log(this);

function test() {
    console.log(this);
}

test();

// how the fn is called

// this inside a  object's method.

const obj = {
    a: 10,
    x: function() {
        // console.log(this);
        console.log('value of a: ', this.a);
    }
}

obj.x();

// call, apply, bind

const student = {
    name: 'test',
    printName: function() {
        console.log('The name of the student is', this.name);
    }
}

// student.printName();

const student2 = {
    name: 'newName'
}

// student.printName.call(student2);

// inside arrow fn

const arrObj = {
    a: 10,
    x: () => {
        console.log(this);
    }
}

arrObj.x();

// inside nested arrow fn

const arrObj2 = {
    a: 10,
    x: function() {
        const y = () => {
        console.log(this);
        }
    y();
    }
}

arrObj2.x();

