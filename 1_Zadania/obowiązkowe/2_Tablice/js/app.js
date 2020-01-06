//task0
//
let numbers =[1,2,3,4];
let numbers2 =[5,6,7,8];

function distFromAvarage(numbers_table){
//console.log(numbers_table);

let kalkulator=0;

numbers_table.forEach(element => {
//console.log(element);

kalkulator = kalkulator+element;
});

kalkulator=kalkulator/numbers_table.length;

//console.log(kalkulator);

let numbers_in_function=[];
numbers_table.forEach(element => {

numbers_in_function.push(element-kalkulator);

});

//console.log(numbers_in_function);

return numbers_in_function;

}

console.log(distFromAvarage(numbers));

console.log(distFromAvarage(numbers2));

console.log(distFromAvarage([21,22,23]));
//
//

//task1
//
let fruits = ['apple', 'orange', 'banana', 'peach', 'pear'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
for(let count = 0; count < fruits.length; count++){
console.log(fruits[count]);
}
//
//

//task3
//
let fruits = ['apple','orange','banana'];
function printTable(fruits_table){ 
    for(let i=0;i<fruits_table.length;i++){

       console.log(fruits_table[i]);

    }
}
printTable(fruits); 
//
//

//task4
//
let numbers=[1,2,5,10];
function multiply(array){
    var temp = 1;
    for(let i=0;i<array.length;i++){
    temp *=array[i];
    }
    return temp;
}
console.log(multiply(numbers));
//
//

//task5
//
function getEvenAvarage(array){
    var temp = 0;
    var counter = 0;
    array.forEach(element => {
        if (element %2 == 0)
        {
            temp += element;
            counter+=1;
        
        }
    });
    if(temp == 0)
    {
console.log(null);

    }else{
        console.log(temp / counter);
    }
}
    getEvenAvarage([1,2,3,4,5,6,7])// => 4
    getEvenAvarage([1,1,1,1])// => null
    getEvenAvarage([2,8,3,7,4])// => 4.666
//
//

//task6
//
function sortArray(array)
{
    console.log(array.sort((a,b) => a - b));
}
sortArray([145,11,3,64,4,6,10]) //=> [3,4,6,10,11,64,145]
//
//

//task7(zad7)
//
function addArrays(array1,array2)
{
var counter = 0;
if (array1.length>array2.length)
{
    counter=array1.length;
}
else
{
    counter=array2.length;
}

var array3=[];
var suma=0;
for(let i=0; i<counter; i++)
{
    suma=0;
    if (i<array1.length)
    {
        suma=suma+array1[i];
    }

    if (i<array2.length)
    {
        suma=suma+array2[i];
    }

    array3.push(suma);


}
console.log(array3);
}

addArrays([4,0,1,3,4], [1,9,6,7,8,17]) //=> [5,9,7,10,12,17]
addArrays([8,3,22], [1,3,2]) //=> [9,6,24]
addArrays([2,3,1,5,3,5], [3,1,76,1]) //=> [5,4,77,6,3,5]

//!!!
//!!!