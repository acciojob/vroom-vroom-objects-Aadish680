// Complete the js code
// function Car(make, model) {
// 	this.ma = make;
// 	this.mo = model;
// }

// function SportsCar(make, model, topSpeed) {
// 	Car.call(this , make , model);
// 	this.top = topSpeed;
	
// }

// Car.prototype.getMakeModel= function(){
// 	return `${this.ma} ${this.mo}`;
	
// }

// SportsCar.prototype.getTopSpeed= funtion(){
// return`${this.top}`;
// }

// SportsCar.prototype = Object.create(Car.prototype);
// SportsCar.prototype.constructor = SportsCar;

// class Car{
// 	constructor(model ,make){
// 		this.mo = model;
// 		this.ma= make;
		
// 	}
// 	getMakeModel(){
// 		return`${this.mo} ${this.ma}`;
// 	}
// }

// class SportsCar extends Car{
// 	constructor(model , make , topSpeed){
// 		super(model, make);
// 		this.top = topSpeed;
// 	}
// 	getTopSpeed(){
// 		return`${this.top}`;
// 	}
	
// }
// Car Class
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return `${this.make} ${this.model}`;
    }
}

// SportsCar Class (inherits from Car)
class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model); // Call parent constructor (Car)
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return `Top Speed: ${this.topSpeed} mph`;
    }
}

// Example usage:
const car1 = new Car("Toyota", "Corolla");
console.log(car1.getMakeModel()); // Output: Toyota Corolla

const sportsCar1 = new SportsCar("Ferrari", "488 GTB", 211);
console.log(sportsCar1.getMakeModel()); // Output: Ferrari 488 GTB
console.log(sportsCar1.getTopSpeed());  // Output: Top Speed: 211 mph































// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
