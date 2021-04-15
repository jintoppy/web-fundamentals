const btn = document.querySelector('button');
const inputEl1 = document.querySelector('#input1');
const inputEl2 = document.querySelector('#input2');

const arr = [3, 5, 20, 10];

// const findItemsLessThan20 = item => item < 20;
// function findItemsLessThan20(item) {
//     return item < 20;
// }

// const filteredArr = arr.filter(findItemsLessThan20);

//Event Bubbling


const onBtnClick = (e) => {
    e.stopPropagation();
    console.log('button click');
};

// function onBtnClick() {
//     console.log('hi');
// }


function keyUpListener(ev) {
    // console.log(ev);
    console.log(ev.target.value);
}

btn.addEventListener('click', onBtnClick);
inputEl1.addEventListener('keyup', keyUpListener);
inputEl2.addEventListener('keyup', keyUpListener);
document.querySelector('ul').addEventListener('click', function (ev) {
    console.log(ev.target);
    console.log(ev.currentTarget);
});