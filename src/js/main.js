// Imports
import { Modal } from './modal.js'
import { errorBox } from './errorBox.js'
import { calcularIMC, notNumber } from './utils.js';


const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
        errorBox.open();
        form.reset();
        return;
    }

    errorBox.close()

    let imcValue = calcularIMC(weight, height);
    displayImcValueMessage(imcValue)
}

function displayImcValueMessage(imcValue){
    Modal.text.innerText = `SEU IMC É DE ${imcValue}`;
    Modal.open();
    form.reset();
}







