//task1
var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};


var robotCristian = new Robot("Cristian")
robotCristian.sayHi("Adrian")


var robotMarian = new Robot("Marian")
robotMarian.isFunctional = false
robotMarian.sayHi("Adrian")
robotMarian.changeName("Michael")


var robotRicardo = new Robot("Ricardo")
robotRicardo.isFunctional = false
robotRicardo.sayHi("Adrian")
robotRicardo.changeName("Alex")
robotRicardo.fixIt()
robotRicardo.sayHi("Adrian")