class Person {
    constructor(public age:number) {}
    growOld = () => {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() { console.log(person.age); },2000); // 2

// Se iguala la función de la clase a una variable de otra clase
var growOld = person.growOld;
// más adelante se llama
growOld();

let _self = this;
something.each(function() {
console.log(_self); // the lexically scoped value
console.log(this); // the library passed value
});
