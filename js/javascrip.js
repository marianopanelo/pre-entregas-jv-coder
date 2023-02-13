

let nombre = prompt("por favor indique su nombre")
let edad = prompt ("por favor " + nombre + " indique su edad")

if (edad >= 18) {
    alert ("bienvenido " + nombre)
}

else {
    alert(nombre + " al ser menor no puede continuar")
/*aca hice un loop bastante grande porque no se como cortar el codigo y se supone que es menor y no podria jugar*/
    for (i = 0 ; i < 500 ;i++){
        alert(nombre + " al ser menor no puede continuar")
    }
}

let numeroGanador = Number(Math.floor(Math.random() * (0 + 100)))
let apuesta = Number(prompt("indique cuanto desea apostar"))
let ciclos = 1

for (let intentos = 0 ; intentos <= 20 ; intentos++){

    let numeroElegido = Number(prompt("elija un numero"))

    if  (numeroElegido == numeroGanador) { 
        alert  ("felicidades encontraste el numero")
       break
    }

    else if ((numeroElegido + 6) > numeroGanador && numeroElegido  < numeroGanador ) {
        alert ("el numero ganador esta entre los 5 numeros siguientes")
    }

   else if ((numeroElegido - 6) < numeroGanador && numeroElegido > numeroGanador ) {
        alert ("el numero ganador esta entre los 5 numeros anteriores")
    }

    else if (numeroElegido > numeroGanador ) {
        alert ("el numero ganador es menor")
    }

    else if (numeroElegido < numeroGanador) {
        alert ("el numero ganador es mayor")
    }

    else {
        alert ("no eligio un numero , por favor vuelva a intentarlo")
    }
    ciclos++
}

/*le tube que poner ciclos++ poruqe necesitaba sacar las cantidad de vueltas del ciclo y si ponia abajo intentos ,que seria la cantidad de siclos
no me lo tomaba , supongo que es porque cuando hago un break me corta los siclos y no me los cuenta*/

alert ("el numero ganador era " + numeroGanador)

function cantidadGanada (porcentaje){

    if (ciclos <= 2){
        porcentaje = 3
    }

    else if (ciclos <= 5  && ciclos > 2){
        porcentaje = 1.5
    }

    else if (ciclos <= 7 && ciclos > 5){
        porcentaje = 1
    }

    else {
        porcentaje = 0
    }

    let suma = (apuesta * porcentaje)
    alert ("usted gano " + suma + "$" )

}

cantidadGanada()


