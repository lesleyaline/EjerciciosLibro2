var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person;
}());
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000); // 2
// Se iguala la función de la clase a una variable de otra clase
var growOld = person.growOld;
// más adelante se llama
growOld();
