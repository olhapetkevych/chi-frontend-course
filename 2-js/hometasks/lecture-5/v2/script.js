const data = {
    //firstNumber: "",
    //secondNumber: "",
    tempValue: "",
    value: NaN,
    sign: "",
}
let result;

window.addEventListener("load", (event) => {
    result = document.getElementById("result");
});
//function numberButtonClick(value) {
function inputButtonClick(inputValue) {
    /*if (data.sign === "") {
        data.firstNumber += input.innerText;
    } else {
        data.secondNumber += input.innerText;
    }*/data.tempValue += inputValue;
    result.innerText += inputValue;
}

function signButtonClick() {

}

function operatorButtonClick(signValue) {
    tempValue = Number(data.tempValue);
    console.log(tempValue)
    console.log(signValue)
    //data.tempValue
}

/*function comaButtonClick() {

}

function addNumberClick() {
    //data.firstNumber += data.secondNumber;
    //result.innerText = data.firstNumber;
}

function subtractNumberClick() {
    
}

function multiplyNumberClick() {
    
}

function divideNumberClick() {
    
}*/

function calcButtonClick() {

}