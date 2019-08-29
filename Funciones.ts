let x = () => ({name: 'Alice'});
let y = () => ({name: 'Alice', location: 'Seattle'});

x = y; //ok
y = x; //error porque x ()nmo tiene la propiedad location