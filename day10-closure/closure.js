function parent(x) {
    return function () {
        console.log('value is' + x);
    }
}

const innerFn = parent(10);

innerFn(); // value is 10;

function parentFn() {
    let val = 0;

    return function () {
        val++;
        console.log(val);
    }
}

const inner1 = parentFn()
const inner2 = parentFn();
inner1();
inner1();
inner2();


