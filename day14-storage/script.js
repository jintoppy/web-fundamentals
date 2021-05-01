const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('#addBtn');
const resultEl = document.querySelector('.result');


let items = [];
buttonEl.addEventListener('click', () => {
    items.push(inputEl.value);
    sessionStorage.setItem('items', JSON.stringify(items));
    inputEl.value = '';
    renderItems(items);
    inputEl.focus();
});

const renderItems = (list) => {
    const liItems = list.map(item => `<li>${item}</li>`).join('');
    resultEl.innerHTML = `
        <ul>
            ${liItems}
        </ul>
    `;
};

const checkStorage = () => {
    const itemsFromStorage = sessionStorage.getItem('items');
    if (itemsFromStorage) {
        const parsedItemList = JSON.parse(itemsFromStorage);
        renderItems(parsedItemList);
        items = parsedItemList;
    }
};
checkStorage();

