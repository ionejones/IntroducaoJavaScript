var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;



function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
} 

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
         currentNumberWrapper.style.color = 'red';
    }
}

const acao = document.getElementById("somar");
acao.addEventListener("click",increment);

const acao2 = document.getElementById("subtrair");
acao2.addEventListener("click",decrement);