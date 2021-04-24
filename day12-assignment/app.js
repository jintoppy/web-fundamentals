const resultEl = document.querySelector('.result');


const data = [{ name: 'Jinto' }, { name: 'Rahul' }];

const greeting = 'Hello';

resultEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const txt = e.target.getAttribute('data-name');
    if (txt) {
        console.log(txt);
    }
});


// str = str + 'abc';
// str = str + 'def';

resultEl.innerHTML = data.map(item => {
    return `
        <div class="item">
            <h1>${item.name}</h1>
            <button data-name="${item.name}">
                Click me
            </button>
        </div>
    `;
}).join('');

// let htmlStr = '';
// data.forEach(item => {
//     const itemStr = `
//         <div class="item">
//             <h1>${item.name}</h1>
//             <button data-name="${item.name}">
//                 Click me
//             </button>
//         </div>
//     `;
//     htmlStr = htmlStr + itemStr;
// });
// resultEl.innerHTML = htmlStr;


// template literal
// resultEl.innerHTML = `
//                     <div class="item">
//                         <h1>item1</h1>
//                         <button data-name="item1">
//                             Click me
//                         </button>
//                     </div>
//                     <div class="item">
//                         <h1>item2</h1>
//                         <button data-name="item2">Click me</button>
//                     </div>`;






// const buttonElements = document.querySelectorAll('.item button');
// buttonElements.forEach(buttonEl => {
//     buttonEl.addEventListener('click', (e) => {
//         const txt = e.target.getAttribute('data-name');
//         console.log(txt);
//     });
// });
