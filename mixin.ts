class Disposable{
    isDisposed: boolean;
    dispose(){
        this.isDisposed=true;
    }
}

class Activatable{
    isActive:boolean;
    activate(){
        this.isActive=true;
    }
    deactivate(){
        this.isActive=false;
    }
}

class SmartObject implements Disposable, Activatable{
    //Este constructor lo que hara sera que mostrará por pantalla los estados isactive y isdisposed cada 500 ms
    constructor(){
        setInterval(()=> console.log(this.isActive + " : " + this.isDisposed),500);
    }
    interact(){
        this.activate();
    }
    //Disposable
    isDisposed: boolean =false;
    dispose:()=> void;
    //Activatable
    isActive: boolean=false;
    activate:()=>void;
    deactivate:()=>void;
}
applyMixins(SmartObject, [Disposable, Activatable]);
let smartObj = new SmartObject();
//esto generará una interactuacion cada segundo cambiando el estado de false false a true true la primera vez, luego como la variable ya valdría true true simplemente se dedicará a mostrarla cada segundo
setTimeout(()=> smartObj.interact(),1000);

function applyMixins (derivedCtor: any, baseCtors:any[]){
    baseCtors.forEach(baseCtor=>{
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name=>{
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}