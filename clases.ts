class Something {
    static instances = 0;
    constructor() {
    // Acedemos directamente mediante el nombre de la clase
        Something.instances++;
    }
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); 
    