//task1(zad1)
const book = {
    name  : "Książka",
    title : "przykładowa",
    author: "Vinci",
    numberOfPages: "200",
    print : function() {
        console.log("book");
    }
}

//task2(zad2)
const person = {
    name  : "Kamil",
    age : 20,
    print : function() {
        console.log("hello");
    }
}

//task3(zad3)
const recipe = {
    title  : "apple pie",
    servings : 4,
}
recipe.ingredients = ["eggs","flour","apples","milk","yeast","cinnamon"];
console.log(recipe.title, recipe.servings, recipe.ingredients);

//task4(zad4) -> w osobnym pliku 'zadanie04.js'
//!!!
//!!!

//task5(zad5) -> w osobnym pliku 'zadanei05.js'
//!!
//!!

//task6(zad6)
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;


