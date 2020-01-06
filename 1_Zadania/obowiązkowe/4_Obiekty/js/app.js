//task0a
//
var city = {
    capital: "Warsaw",
    population: 40000000,
    president: "duda",
    primeMinisters: "morawiecki",
}
console.log(city);
//
//

//task0b
//
var timeMachine ={
    shape: "sedan",
    model: "volkswagen",
    run(date, place){
        return 'data: '+date+', miejsce: '+place;
    }
}
console.log(timeMachine.run('02.03.2040','Colorado'));
//
//

//task1(zad1)
//
var book = {
    name: "Książka",
    title: "kod leonarda da vinci",
    author: "dan brown",
    numberOfPages: "200",
}
console.log(book);
//
//

//task2(zad2)
//
var person = {
    name  : "Kamil",
    age : 20,
    print(){
        return "hello";
    }
}
console.log(person.print());

//task3(zad3)
var recipe = {
    title  : "apple pie",
    servings : 4,
}
recipe.ingredients = ["eggs","flour","apples","milk","yeast","cinnamon"];
console.log(recipe.title, recipe.servings, recipe.ingredients);

//task4(zad4) -> w osobnym pliku 'zadanie04.js'
//
//
//

//task5(zad5) -> w osobnym pliku 'zadanei05.js'
//
//
//

//task6(zad6)
//
var spoon = {
    isExist: true
}

var fork = spoon;

console.log(fork.isExist);

fork.isExist  = false;
console.log(fork.isExist);
//
//
