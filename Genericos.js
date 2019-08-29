//El parametro hereda de la interfaz la cual fuerza al parametro tenga el metodo length
function echo(arg) {
    console.log(arg.length);
    return arg;
}
//Esto funcionará
var a = echo("aaa");
var t = echo({ length: 2, name: "aa" });
//Esto no funcionará
var b = echo(1);
