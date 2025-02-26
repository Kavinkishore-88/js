const vehicle = {
    door: 2,
    engine: function() {
        return "vrrooom!";
    }
};
console.log(vehicle);
console.log(vehicle.engine());

const car = Object.create(vehicle);//inherit the vehicle in car
console.log(car.door);
console.log(car);

car.wheels = 4;//insert the value in obj
console.log(car);

 car.engine = function(){//modify the contant or overwriting
    return "whoosh";
 }

 console.log(car.engine());//overWrited contant
 console.log(vehicle.engine());//actual contant

 const benz = Object.create(car);//multi level inheritance
 console.log(benz.engine());