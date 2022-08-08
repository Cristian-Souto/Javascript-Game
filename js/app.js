/*inicializamos las variables*/
let cardFlip = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let mostratMovimientos = document.getElementById("movimientos");

/*generamos los numeros aleatorios del array*/
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

numbers = numbers.sort(() => {
    return Math.random() - 0.5;
});
console.log(numbers);

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
        console.log(moves)
        movimientos.innerHTML =`Movimientos ${moves}`;
    }
}