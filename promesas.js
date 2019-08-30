var promise = new Promise(function (resolve, reject) {
    reject(new Error("Algo malo a pasado"));
});
promise.then(function (res) {
    //this is never called
});
promise["catch"](function (err) {
    console.log('Tengo una llamada: ', err.message); //Tengo una llamada algo malo a pasado.
});
