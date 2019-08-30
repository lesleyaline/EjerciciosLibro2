class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}

var foo = new FooBase();
foo.x; // OK
foo.y; // ERROR : private
foo.z; // ERROR : protected
    
class FooChild extends FooBase {
    constructor() {
        super();
        this.x; // OK
        this.y; // ERROR: private
        this.z; // okay
    }
}
    