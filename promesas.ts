const promise = new Promise((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log('I get called:', res ===123); //Devuelve:true
});

promise.catch((err) =>{
 //nunca es utilizado
});