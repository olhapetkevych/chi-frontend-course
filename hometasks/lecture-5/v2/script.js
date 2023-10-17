const data = {
    firstNumber: "",
    secondNumber: "",
    sign: "",
}

function numberButtonClick(input) {
    if (data.sign === "") {
        data.firstNumber += input.innerText;
    } else {
        data.secondNumber += input.innerText;
    }
}