const obj = {
    title: 'JS training'
};

function abc(greeting, salute) {
    console.log(salute + ' ' + greeting + ' ' + this.title);
}

abc('Hello', 'Hey'); //window.title Hey Hello undefined

abc.call(obj, 'Hello', 'Hey'); // obj.title  Hey Hello JS training

abc.apply(obj, ['Hello', 'Hey']);// obj.title  Hey Hello JS training

