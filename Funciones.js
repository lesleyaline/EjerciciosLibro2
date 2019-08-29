function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return Array(padding.length + 1).join(" ") + value;
    }
    throw new Error("Expected String or number, got '" + padding + "'");
}
console.log(padLeft("hello", "aaa")); //Ejemplo de funcion con texto -> funciona
console.log(padLeft("hello", 5)); //Ejemplo de funcion con numero ->funciona
console.log(padLeft("hello", true)); //Ejemplo de funcion con texto -> No funciona
