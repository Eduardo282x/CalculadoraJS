function numero(valor){
    document.getElementById("result").value += valor;
}

function operacion(){
    var opera = document.getElementById("result").value;
    if(opera == 0){
        document.getElementById("result").value = "Sin Operacion";
    } else {
        document.getElementById("result").value = eval(opera);
    }
}

function reset(){
    document.getElementById("result").value = " ";
}