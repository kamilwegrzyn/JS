/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//task0
//

//Definicja funkcji jeden
function jeden() {

    //Definicja zmiennej jeden
    var zmienna1 = 1;

    //Definicja funkcji dwa
    function dwa() {

        //Zmiennna widoczna, bo funkcja 2 jest funkcją wewnętrzną funkcji jeden
        console.log(zmienna1);

        //Definicja zmiennej dwa
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa
    dwa();

    //zmienna dwa nie widoczna, bo nie ma z tego miejsca dostępu do zmiennych wewnętrznych funkcji dwa.
    console.log(zmienna2)
}

//wywołanie funkcji jeden.
jeden()

//
//

//task1
//w osobnym pliku
//
//

//task2
//



//
//