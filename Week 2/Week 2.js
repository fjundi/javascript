//1

function sum(x,y,z) {

    return x+y+z;

}

console.log(sum(3,5,8))


//2

function colorCar(x) {
    console.log("The car is " + x + ".")
}
colorCar('purple')

//3

let cam = {
	model : 'Leica',
	year : '1954',
	color : 'chrome with black leatherette',
	size : '35mm',
}


for(let c in cam) {
	console.log(c + ' : ' + cam[c]);
}


//4

function vehicleType(color, code) {
    if(code == 1) 
        console.log("A " + color + " car.");
    else (code == 2) 
    console.log("A " + color + " motorbike.");
}

vehicleType("blue", 2);

//5

console.log ( 3==3? 'true' : 'false' )


//6

function vehicle(color, code, age) {
    if (age >= 5) {
        if (code === 1) {
            console.log("A " + color + " used" + " car.");
        } else if (code == 2){
            console.log("A " + color + "used" + " motorbike.");
        }

    } 
    else if(age < 5) {
        if (code === 1) {
            console.log("A " + color + " new"+ " car.");
        } else (code === 2) {
            console.log("A " + color + " new"+ " motorbike.");
        }
    } 
}

vehicle("blue", 1, 5);  

//7

let list = ['motorbike', 'car', 'caravan', 'tractor', 'truck']

//8

let getItem = list[2];

console.log(getItem);

//9

function vehicle(color, code, age) {
    if (age >= 5) {
        if (code === 1) {
            console.log("A " + color + " used" + " car.");
        } else if (code == 2){
            console.log("A " + color + "used" + " motorbike.");
        }

    } 
    else if(age < 5) {
        if (code === 1) {
            console.log("A " + color + " new"+ " car.");
        } else if (code === 2) {
            console.log("A " + color + " new"+ " motorbike.");
        } else if (code === 3) {
            console.log("A " + color + " new"+ " caravan.");
        }
    } 
}

vehicle("green", 3, 1); 

//10, 13, 14, 15, 16

//11

list.unshift = "boats"

//12

let obj = {}

console.log(obj);

//17

let bar = 42; 
typeof typeof bar;

typeof bar //Since the variable "bar" is defined as a number, the typeof returns "number".

typeof typeof bar //Since the result of "typeof" is always a string, a typeof typeof will return a string.
