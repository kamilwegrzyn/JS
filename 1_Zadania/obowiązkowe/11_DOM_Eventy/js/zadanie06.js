windows.addEventListener('DOMContentLoaded', event => {
    var div= document.getElementsByClassName("box big");
    var globalX = docuemnt.getElementById("globalX");
    var globalY = docuemnt.getElementById("globalY");
    var localX = docuemnt.getElementById("localX");
    var localY = docuemnt.getElementById("localY");

    div.addEventListener("moudeMove", function (e){
        globalX.innerText = e.pageX;
        globalY.innerText = e.pageY;
        let rect = div.getBoundingClientRect();
        console.log(rect);
        localX.innerText = e.pageX-rect.left;
        localY.innerText = e.pageY-rect.top;
    })
});

