// call apply bind methods

const name1 = {
    firstName: 'ranveer',
    lastName: 'singh'
}

const name2 = {
    firstName: 'akshay',
    lastName: 'kumar'
}

function printFullName(state) {
    console.log(`${this.firstName} ${this.lastName} is from ${state}`)
}

printFullName.call(name1, 'MH');
printFullName.call(name2, 'DL');

// in apply need to pass arguments in array format.s

printFullName.apply(name2, ['DL']);

// bind 

let printMyName = printFullName.bind(name1, 'MH');
printMyName();

