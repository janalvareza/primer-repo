let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo =10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento (){
 let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 console.log (numeroSecreto);
 if (numeroDeUsuario===numeroSecreto){
    asignarTextoElemento ('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'intento': 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute ('disabled');
 } else{
    // El usuario no acertó
    if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento ('p','El número secreto es menor');
    } else {
        asignarTextoElemento ('p','El número secreto es mayor');
    }
    intentos ++;
    limpiarCaja();
}
 return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario'). value ='';
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

//    console.log(numeroGenerado);
//    console.log(listaNumerosSorteados);
    //todos los numeros sorteados
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento ('p','Ya se sortearon todos los numeros posibles');
    }else {    
        //si el numero generado esta en la lista
        
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();        
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales (){
    asignarTextoElemento ('h1','Juego del número secreto');
    asignarTextoElemento ('p',`Indica un número del ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos=1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales ();
    document.getElementById('reiniciar').setAttribute ('disabled',true);
}

condicionesIniciales();

