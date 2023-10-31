const data = {
    firstNumber: NaN,
    secondNumber: NaN,
    sign: "",
}

function firstInputBlur(input) {
    if (input.value !== "") {
        data.firstNumber = Number(input.value);
    }
}

function secondInputBlur(input) {
    if (input.value !== "") {
        data.secondNumber = Number(input.value);
    }
}

function signBlur(input) {
    data.sign = input.value;
}

function calcButtonClick() {
    if (isNaN(data.firstNumber) || isNaN(data.secondNumber) || data.sign === "") {
    //alert("Немає всіх потрібних даних: \nПерше число:" + data.firstNumber + ", друге: " + data.secondNumber + ", знак: " + data.sign);
        alert("Введіть обидва числа і знак операції");
        return;
    }
    switch (data.sign) {
        case "+":
            alert("Результат: " + (data.firstNumber + data.secondNumber));
            break;
        case "-":
            alert("Результат: " + (data.firstNumber - data.secondNumber));
            break;
        case "*":
            alert("Результат: " + (data.firstNumber * data.secondNumber));
            break;
        case "/":
            alert("Результат: " + (data.firstNumber / data.secondNumber));
            break;
        default:
            alert("Помилка!");
            break;
    }
}