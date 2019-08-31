class Base {
    // realizamos una función mediante el uso de fat arrow
    log = () => { console.log('hello world'); }
}
class Child extends Base {
    logWorld() { this.log() };
}