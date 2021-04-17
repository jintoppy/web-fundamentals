//fetch
//Promise

//object => resolved, rejected, finally



const myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('inside timeout');
        reject('some value');
    }, 1000);
});

myPromise.then(() => {
    console.log('after successful timeout');
}, (val) => {
    console.log('after failed timeout', val);
});

