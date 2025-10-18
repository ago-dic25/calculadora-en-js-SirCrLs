log = [];
countLog = 0;

pantalla = document.getElementById("pantalla-calc");
numero1 = document.getElementById("num1");
numero2 = document.getElementById("num2");
n1 = 0;
n2 = 0;
suma = document.getElementById("btnSuma");
resta = document.getElementById("btnResta");
mul = document.getElementById("btnMul");
div = document.getElementById("btnDiv");
limpiar = document.getElementById("btnLimpiar");
listaLog = document.getElementById("lista-log");

function getNumbers(){
    if(numero1.value == ""){
        n1 = 0;
    }else{
        n1 = Number(numero1.value);
    }

    if(numero2.value == ""){
        n2 = 0;
    }else{
        n2 = Number(numero2.value);
    }
    
}

function printLog(num1,num2,r,op){
    log[countLog] = `${countLog + 1}.  ${num1} ${op} ${num2} = ${r}`;
    console.log(log[countLog]);
    countLog++;
}

function crearListaLog(){
    listaLog.textContent = "";
    for (let i = 0; i < log.length; i++) {
        nuevoLog = document.createElement('li');
        nuevoLog.textContent = log[i];
        listaLog.appendChild(nuevoLog);
    }
}

suma.addEventListener("click",function(){
    getNumbers()
    res = n1 + n2;
    console.log(res)
    pantalla.value = res;
    printLog(n1,n2,res,"+");
    crearListaLog();
});

resta.addEventListener("click",function(){
    getNumbers()
    res = n1 - n2;
    console.log(res)
    pantalla.value = res;
    printLog(n1,n2,res,"-");
    crearListaLog();
});

mul.addEventListener("click",function(){
    getNumbers()
    res = n1 * n2;
    console.log(res)
    pantalla.value = res;
    printLog(n1,n2,res,"x");
    crearListaLog();
});

div.addEventListener("click",function(){
    getNumbers()
    if(n2 != 0){
        res = n1 / n2;
    }else{
        res = "Syntax Error"
    }
    console.log(res)
    pantalla.value = res;
    printLog(n1,n2,res,"/");
    crearListaLog();
});

limpiar.addEventListener("click",function(){
    pantalla.value = "";
    numero1.value = "";
    numero2.value = "";
})