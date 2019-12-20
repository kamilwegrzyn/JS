//task1
//

function counterHello (number) {
    var count = 0;
    var intervalId = setInterval(() => {
    count ++;
    console.log('Hello', count);
    if(count ===number) {
    clearInterval(intervalId);
    
    }
    }, 500);
    }
    counterHello(5)
    
    //
    //