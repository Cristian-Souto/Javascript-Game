/*inicializamos las variables*/
let cardFlip = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;

/*generamos los numeros aleatorios del array*/
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

numbers = numbers.sort(()=>{
   return Math.random() - 0.5;
})
console.log(numbers);

/*Main function*/

function flip(id){
    cardFlip++;
    console.log(cardFlip);

    if(cardFlip == 1){
        cardFlip = document.querySelector("#id");
        firstResult = numbers[id]
        card1.innerHTML = firstResult;
    }
}