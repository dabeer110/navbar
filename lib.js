export class car {
    // properties
    carname
    model
    color

    constructor(name,model,color){
        this.name= name;
        this.model= model;
        this.color= color

    }
    // method
    wheel(){
        console.log(this.carname + this.model + this.color)
    }
}

export function add(a,b){
    console.log(a+b)
}
export function subtract(a,b){
    console.log(a-b)
}
export function multiply(a,b){
    console.log(a*b)
}
export function divide(a,b){
    console.log(a/b)
}
