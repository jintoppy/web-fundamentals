import utils from './utils';

const btn = document.querySelector('button');
const inputEl = document.querySelector('input');

const sayHello = (name) => {
    console.log(name);
};

btn.addEventListener('click', () => {
    sayHello(inputEl.value);
});

const title = utils.getTitle();
console.log(title);

const h1El = document.createElement('h1');
h1El.innerText = "this is generated";
document.body.appendChild(h1El);