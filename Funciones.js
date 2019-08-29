var x = function () { return ({ name: 'Alice' }); };
var y = function () { return ({ name: 'Alice', location: 'Seattle' }); };
x = y; //ok
y = x; //error porque x ()nmo tiene la propiedad location
