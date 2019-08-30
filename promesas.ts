
//cadenas de promesas o chain-ability of Promises
Promise.resolve(123)
    .then((res) =>{
        console.log(res);//123
        return 456;
    })
    .then((res) => {
        console.log(res);//456
        return Promise.resolve(123);
    })
    .then((res) => {
        console.log(res); //123
value
    return Promise.resolve(123);    
})