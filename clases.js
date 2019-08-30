var Something = /** @class */ (function () {
    function Something() {
        // Acedemos directamente mediante el nombre de la clase
        Something.instances++;
    }
    Something.instances = 0;
    return Something;
}());
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);
