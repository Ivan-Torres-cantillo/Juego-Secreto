let numeroSecreto = 0;
let intentos = 0;
let listanumerosSorteados = [];
let numeroMaximmo = 10;

console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        //El usuario no acertó
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El número es menor');
            } else {
                asignarTextoElemento('p', 'El número es mayor');
            }
            intentos++;
            limpiarCaja();
        } 
    return;
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
  
}

function generarNuemeroSecreto() {
    let numeroGenerado = Math.floor((Math.random()*numeroMaximmo)+1);

    console.log(numeroGenerado);
    console.log(listanumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listanumerosSorteados.length == numeroMaximmo) {
        //si el numero generado esta actualmente en la lista
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        } else {
        if (listanumerosSorteados.includes(numeroGenerado)) {
            return generarNuemeroSecreto();
        } else {
            listanumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Numero Secreto!');
    asignarTextoElemento('p',`'Indica un número del 1 al ${numeroMaximmo}'`);
    numeroSecreto = generarNuemeroSecreto();
    intentos = 1;
}

function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    //indicar menseje de intervalo de numeros
    //generar nuevo número aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
       
condicionesIniciales();


