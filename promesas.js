Promise.reject(new Error('Something bad happened'))
    .then(function (res) {
    console.log(res); //not called
    return 456;
})
    .then(function (res) {
    console.log(res); //not called
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res); //not called
    return Promise.resolve(123);
})["catch"](function (err) {
    console.log(err.message); //something bad happened
});
