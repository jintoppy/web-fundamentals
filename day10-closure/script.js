function simple() {
    console.log('hi');
}

simple();

//Higher Order Function
function abc(fn, execute) {
    if (execute) {
        fn();
    }

}

//Higher Order Function
function def() {
    return function () {
        console.log('hi');
    }
}


abc(function () {
    console.log('hello');
}, true);

//Garbage collection

const item = def();
item();
item();

