//task0
function distFromAvarage(numberArray){
    var avg = 0;
    numberArray.forEach(element => {
        avg += element;
    });

    avg = avg / numberArray.length;
    console.log(avg);
    var returnArray = [];
    numberArray.forEach(element => {
        returnArray.push(element - avg);
    });
    console.log(returnArray);
    return returnArray;
}

distFromAvarage([1,2,3,4,5,6,7])

//task1
let fruits = ['apple', 'orange', 'banana', 'peach', 'pear'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
for(let count = 0; count < fruits.length; count++){
console.log(fruits[count]);

}

//task3
let array = ['apple','orange','banana'];
function printTable(array){
    for(let i=0; i< array.lenght ; i++)
    console.log(array[i])

}

//task4
function multiply(array){

    var temp = 1;
    for(let i = 0; i<array.lenght; i++){
        temp *=array[i];
    }
    console.log(temp);
}

//task5
function getEvenAvarage(array){
    var temp = 0;
    var counter = 0;
    array.forEach(element => {
        if (element %2 == 0)
        {
            temp += element;
            counter++;
        
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



//task6

function sortArray(array)
{
    console.log(array.sort((a,b ) => a - b));
}
sortArray([145,11,3,64,4,6,10]) //=> [3,4,6,10,11,64,145]


//task7
