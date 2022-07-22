function ex1(){
    var total = 0;
    var i = 0;
    while(total < 10000){
        i = i +1;
        total = total +i
    }
    console.log(i)
    document.getElementById("resultEx1").innerHTML = i;
    
}


function ex2(){
    var x = + document.getElementById("numX").value;
    var n = + document.getElementById("numN").value;
     total = 0;

    for(i = 1; i <= n; i++){
        total = total + Math.pow(x, i);
    }
    document.getElementById("resultEx2").innerHTML = total;
}

function ex3(){
    var n = + document.getElementById("numN3").value;
    var factorial = 1;
    for(i = 1; i<=n; i++){
        factorial = factorial*i;
    }

    document.getElementById("resultEx3").innerHTML = factorial;
}

function ex4(){
    // var count = 10;
    var count = document.getElementById("count");
    for(i = 1;i <= 10;i++){
        debugger
        var div=document.createElement("div")
        if(i % 2 === 0){
            div.innerHTML = "div chẵn"
            div.style.backgroundColor = "red";
            console.log(div)
        } else {
            div.innerHTML = "div lẻ"
            div.style.backgroundColor = "blue";
            console.log(div)
        }
        count.appendChild(div)
    }
}

