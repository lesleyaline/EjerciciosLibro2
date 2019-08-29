//interfaz que asegura que el parametro tenga el metodo length
interface withLength{
    length: number;
}

//El parametro hereda de la interfaz la cual fuerza al parametro tenga el metodo length
function echo<T extends withLength> (arg: T): T{
    console.log(arg.length);
    return arg;
}
 //Esto funcionará
 let a = echo("aaa");
 let t = echo({length:2,name:"aa"}); 

 //Esto no funcionará
 let b = echo(1);