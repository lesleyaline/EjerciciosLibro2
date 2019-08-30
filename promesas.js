Promise.reject(new Error('Something bad happened'))
    .then(function (res) {
    console.log(res); //not called
    return 456;
})["catch"](function (err) {
    console.log(err.message); //something bad happened
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res); //123
});
