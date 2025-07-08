// factory functions 

function circle(radius) {
    let res = {
        radius,
        draw: function () {
            console.log('drawing');
        }
    }
    return res;
}

const circle1 = circle(23);

// console.log(circle1.radius);
// circle1.draw();

// Constructor functions

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('drawing');
    }
}

const newCircle = new Circle(3);
// newCircle.draw();

// Constructor properties.

// console.log(newCircle.constructor);
// console.log(circle1.constructor);

// Fns are objects.

// value vs reference types.

let x = 100;

function val(x) {
    x++;
}

val(x);
// console.log(x);

let obj = {value: 100};

function valObj(x) {
    x.value++;
}

valObj(obj);
// console.log(obj);

// adding and deleting properties.

// abstraction - hide complex implementation, and show/expose only necessary property or methods.

function Acircle(radius) {
    this.radius = radius;
    this.defaultLocation = {x: 0, y: 0};
    this.getOptimumLocation = function (factor) {
        // 
    }
    this.draw = function () {
        this.getOptimumLocation(1);
        console.log('draw');
    }
}

// const circle2 = new Acircle(5);
// circle2.draw();

// private property and method

// local members
function Acircle1(radius) {
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};
    let getOptimumLocation = function (factor) {
        // 
    }
    this.draw = function () {
        // this.radius
        getOptimumLocation(1);
        console.log('draw');
    }
}

const circle3 = new Acircle1(5);
circle3.draw();

// getters and setters 




