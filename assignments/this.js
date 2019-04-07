/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window - if none of above rules apply, the this keyword defaults to the window object, unless in strict mode, then it'll return undefined.
* 2. Implicit Binding - Look to the left of the dot at call time. 
* 3. new binding - whenever a function is invoked with the new, the this keyword is bound to the object being contructed. 
* 4.Explicit Binding - Tells the function what the context of the this keyword is going to be. Using call, apply or bind.
*
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const sayName = function(){
    console.log(this.name);
};

const me = {
    name: 'Baz'
};

sayName(me);

// Principle 2

// code example for Implicit Binding
const myself = {
    name: 'Bazen',
    location: 'Boston',
    sayName: function(){
        console.log(this.name);
    }
};

myself.sayName();

// Principle 3

// code example for New Binding
const Car = function(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
};

const ford = new Car('Explorer', 'silver', '2020');

console.log(ford);

// Principle 4

// code example for Explicit Binding
// .call 
const saidName = function(){
    console.log('My name is ' + this.name);
};

const larry = {
    name: 'Larry',
    location: 'Indianapolis'
}

saidName.call(larry);


// .apply
const sayIntro = function(food1, food2, food3){
    console.log('My name is ' + this.name + ' and I love to eat ' + food1 + ', ' + food2 + ', and ' + food3 + '.');
};
const will = {
    name: 'Will',
    location: 'Anaheim'
};

const foods = ['Pinapples', 'Kiwis', 'Tangerines']; 

sayIntro.apply(will, foods);

// .bind 

const newFn = sayIntro.bind(will, foods[0], foods[1], foods[2]);
newFn();