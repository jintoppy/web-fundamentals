// ES5

// Prototypal inheritance

//constructor
function Animal(name, legs) {
    this.name = name;
    this.legs = legs;
    this.type = 'animal';
}

Animal.prototype.sayName = function () {
    console.log(this.name);
};

function Dog(name) {
    Animal.call(this, name, 4);
    this.type = 'dog';
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
    console.log(`${this.name} is barking`);
};

const bruno = new Dog('Bruno');

// const cat = new Animal('Cat', 4);
// const dog = new Animal('Dog', 2);

// cat.sayName();



// ES6

class Animal {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
        this.type = 'animal';
    }
    sayName() {
        console.log(this.name);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, 4);
        this.type = 'dog';
    }
    bark() {
        console.log(`${this.name} is barking`);
        super.sayName();
    }
}

const bruno = new Dog('bruno');
bruno.sayName();