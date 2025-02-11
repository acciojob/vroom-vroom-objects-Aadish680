// Complete the js code
function Car(make, model) {
	this.ma = make;
	this.mo = model;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this , make , model);
	this.top = topSpeed;
	
}

Car.prototype.getMakeModel= function(){
	return `${this.ma} ${this.mo}`;
	
}

SportsCar.prototype.getTopSpeed= funtion(){
return`${this.top}`;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

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






























// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
