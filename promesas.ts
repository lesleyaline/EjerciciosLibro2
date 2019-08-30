Promise.reject(new Error('Something bad happened'))
    .then((res) => {
        console.log(res); //not called
        return 456;
    })
    .catch((err) =>{
        console.log(err.message); //something bad happened
        return Promise.resolve(123);
    })
    .then((res) =>{
        console.log(res); //123
    })