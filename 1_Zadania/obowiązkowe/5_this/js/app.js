//task0
//
var car = {
    brand: "Mercedes",
    color: "Czarny",
    numberOfKilometers: 0,

printCarinfo(){
    return this.color  +' ' + this.brand+', '+this.numberOfKilometers + 'km';
},
drive(km){
this.numberOfKilometers+=km;
}
}
console.log(car.printCarinfo());
console.log(car.numberOfKilometers);
car.drive(20);
console.log(car.numberOfKilometers);
console.log(car.printCarinfo());
//
//

//task1
//

let przeglady_samochodu=[
'pierwszy przegląd',
'drugi przegląd',
'trzeci przegląd',
];
car.przeglady=przeglady_samochodu;

car.printPrzeglady=function() {
    this.przeglady.forEach(element => {
        console.log(element);
    });
}
car.printPrzeglady();

car.addPrzeglady=function(termin) {
    this.przeglady.push(termin);
}
car.addPrzeglady('czwarty przeglad gratis');
car.printPrzeglady();
//
//

//task2
//w osobnym pliku
//
//

//task3
//
let stairs={
    step: 0,

    up: function () {
        this.step++;
        return this.step;
    },

    down: function () {
        this.step--;
        return this.step;
    },

    printStep: function () {
        console.log(this.step);
        
    },

}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();
//
//
