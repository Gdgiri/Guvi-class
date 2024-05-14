class Circle{
    constructor(radius,color) {
        this.rad=radius;
        this.col=color;
    }

    get Rad(){
        return this.rad;
    }

    set Rad(n){
        this.rad=n;
    }

    get Col(){
        return this.col;
    }

    set Col(m){
        this.col=m;

    }

    get tostring(){
        return `"circle[radius:${this.rad},color:${this.col}]"`;
    }

    get area(){
        return Math.PI*Math.pow(this.rad,2);
    }

    get circumstance(){
        return 2*Math.PI*this.rad;
    }


}

const obj = new Circle(1.0,"red");

console.log("constructor",obj.rad,obj.col);

console.log(obj.Rad);

console.log(obj.Col);

console.log(obj.tostring);

console.log(obj.area);

console.log(obj.circumstance);

obj.Rad=3.15;

obj.Col="blue";

console.log(obj.Rad);

console.log(obj.Col);

//! uber price

class Uber{
    constructor(km,seater,hours){

        this.kilometer=km;
        this.price=50*km
        this.hours=10*hours;
        this.seat=20*seater+this.price+this.hours;

    }

    set distance(k){
        this.price=k;
        
    }

    get distance(){
        return this.price;
    }

    


}

const main=new Uber(2,4,2);

console.log(main.seat);