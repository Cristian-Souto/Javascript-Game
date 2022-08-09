/*inicializamos las variables*/
let cardFlip = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let hitIncrement = 0;
let timer = 30;
let temporizador = false;

let mostratMovimientos = document.getElementById("movimientos");
let showHits = document.getElementById("hit");
let showTime = document.getElementById("time");

let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

/*generamos los numeros aleatorios del array*/

numbers = numbers.sort(() => {
    return Math.random() - 0.5;
});
console.log(numbers);

//funcione para decrementar el tiempo del juego

function countTimer(){
    setInterval(() => {
        timer--;
        showTime.innerHTML = `Time restart: ${showTime}`
    }, 1000);   
}

/*Main function*/
function flip(id) {
    cardFlip++;
    console.log(cardFlip);
    if (cardFlip == 1) {
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = firstResult;
        //deshabilitar boton
        card1.disabled = true;
    } else if (cardFlip == 2) {
        card2 = document.getElementById(id);
        secondResult = numbers[id];
        card2.innerHTML = secondResult;
        //desabilitamos el boton
        card2.disabled = true;
        //incrementamos la variable movimientos
        moves = moves + 1;
        mostratMovimientos.innerHTML =`Moves: ${moves}`;
        //si las tarjetas son iguales
        if(firstResult == secondResult){
          cardFlip = 0;
          //Acierto de tarjetas incremento los valores
          hitIncrement++;
          //mostramos los el valor en las estadicas de acierto
          showHits.innerHTML = `Hits: ${hitIncrement}`;
          if(hitIncrement == 8){
            showHits.innerHTML = `Hits: ${hitIncrement} Great job!!`
          }
        }else{
            //mostramos los valores por unos segundos y luego volvemos a tapas las cards
            setTimeout(()=>{
              card1.innerHTML = '' 
              card2.innerHTML = '';
              //habilitamos las tarjeta 1 y 2
              card1.disabled = false;
              card2.disabled = false;
              cardFlip = 0;
            },1500)
        }
    }
}