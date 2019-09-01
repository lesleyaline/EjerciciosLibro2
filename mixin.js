var Disposable = /** @class */ (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
}());
var Activatable = /** @class */ (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
}());
var SmartObject = /** @class */ (function () {
    //Este constructor lo que hara sera que mostrará por pantalla los estados isactive y isdisposed cada 500 ms
    function SmartObject() {
        var _this = this;
        //Disposable
        this.isDisposed = false;
        //Activatable
        this.isActive = false;
        setInterval(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
    }
    SmartObject.prototype.interact = function () {
        this.activate();
    };
    return SmartObject;
}());
applyMixins(SmartObject, [Disposable, Activatable]);
var smartObj = new SmartObject();
//esto generará una interactuacion cada segundo cambiando el estado de false false a true true la primera vez, luego como la variable ya valdría true true simplemente se dedicará a mostrarla cada segundo
setTimeout(function () { return smartObj.interact(); }, 1000);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
