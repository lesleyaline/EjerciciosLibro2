function echo<T>(arg: T) : T {
    return arg;
}

let a = echo<number>(1); // El typeof es Number
let b = echo<String>("Hola mundo"); // El typeof es String