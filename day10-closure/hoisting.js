function abc() {
    console.log(a);
    if (true) {
        var a = 10;
    }
    console.log(a);
}


//Hoisting
function abc() {
    var a;
    console.log(a);
    if (true) {
        a = 10;
    }
    console.log(a);
}