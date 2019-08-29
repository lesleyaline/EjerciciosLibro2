function Person(age) {
    this.age = age
    // ejecutandola en el navegador el this es window
    // ya que es quien hace la llamada
    this.growOld = function() {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000); // debería incrementar 1 + 1 = 2
setTimeout(function() { console.log(person.age); },2000); // Devuelve 1, debería ser 2