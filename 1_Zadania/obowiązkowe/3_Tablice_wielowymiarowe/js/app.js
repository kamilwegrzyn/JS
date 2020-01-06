//task0
//
function checkArray(array)
{   
    let czypazysta=true;
    let table=[];
    array.forEach(element => {
        
        czypazysta=true;

        element.forEach(element2 => {
            if (element2 %2 !=0)
            {
                czypazysta=false;
            }
        })
        table.push(czypazysta);
    });

    console.log(table);

}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ]; 
    checkArray(arr);
//
//

//task1
//
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

function wypiszWartosci(array)
{
    var countX =0;
    var countY =0;
array.forEach(element => {
    if(countX==2){
        console.log(element.length);
    }
    countY=0;
    element.forEach(element2 => {
       // console.log(countX+'-'+countY);
        if ((countX==3)&&(countY==2)){
            console.log(element2);
        }
        if ((countX==4)&&(countY==2)){
            console.log(element2);
        }

        countY++;

    });
    countX++;

});

}
wypiszWartosci(task1Array);
//
//


//task2(zad2)
//
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
function table_numbers (array){
array.forEach(element => {
    console.log(element);
});

array.forEach(element => {
    console.log(element.length);
});

array.forEach(element => {
    element.forEach(element2 => {
        console.log(element2);
    });
});
}

console.log(table_numbers(task2Array));
//
//

//task4
//
var task3Array = [
    [3, 4, 1, 5],
    [8, 4, 12, 9],
    [2, 4, 13, 0]
];

console.log(table_numbers(task3Array));
//
//

//task5
//
function create2DArray(rows,columns){

    let table=[];
    let table_inside=[];
    var counter =0;

    for(let i=0; i<rows; i++){

        for(let j=0; j<columns; j++){
            table_inside.push(counter);
            counter++;
        }
        table.push(table_inside);
        table_inside=[];
    } 
return table


}
console.log(create2DArray(4,4));
//
//