//let enterButton = document.getElementById("enter")
var input = document.getElementById("input")
var memory = document.getElementById("memory")
var firstNumber = ''
var secondNumber = ''
var temp = ''
var tempSecondNumber = ''
let lastOperator = null
let enterLast = false
let isMouseClick = false
//let vez = 1

function clicked(e) {

    isMouseClick = true;

    document.dispatchEvent(
        new KeyboardEvent("keyup", {
            key: e,
            /*             keyCode: 69, // example values.
                        code: "KeyE", // put everything you need in this object.
                        which: 69, */
        })
    );

}

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    console.log('key: ' + keyName);

    if (!isNaN(keyName) && lastOperator == null) {
        firstNumber += keyName;
        console.log("FirstNum: " + +firstNumber);
    } else if (!isNaN(keyName) && lastOperator != null && !enterLast) {
        secondNumber += keyName;
        console.log("SecondNum: " + +secondNumber)
    } else if (!isNaN(keyName) && enterLast) {
        input.value = keyName;
        firstNumber += keyName;
        secondNumber = '';
        enterLast = false;
        lastOperator = null;
        console.log("caiu aqui")
        isMouseClick = false
    }

    if (isMouseClick && keyName != "Enter") {
        input.value += keyName
        console.log("clicado")
        isMouseClick = false
    } else if (isMouseClick && keyName == "Enter") {
        isMouseClick = false;
    }
    lastKey(keyName);
    input.focus(onchange);
});

function clearDisplay() {
    input.value = ""
    memory.value = ""
    firstNumber = ""
    secondNumber = ""
    lastOperator = null
    enterLast = false
}

function enter() {
    firstNumber = '';
    secondNumber = '';
}

function lastKey(e) {

    if (e == "Delete") {
        clearDisplay();
    }

    if (e == "+" || e == "-" || e == "*" || e == "/") {
        //temp = +firstNumber;
        temp = +input.value.slice(0, - 1)
        lastOperator = e;
        enterLast = false;
    }

    if (e == "Enter") {
        if (enterLast) {
            memory.value = input.value + lastOperator + tempSecondNumber
            operation(temp, lastOperator, tempSecondNumber)
            console.log(lastOperator)
            console.log("2nd Enter / TEMP:" + temp)
        } else {

            tempSecondNumber = secondNumber;
            memory.value = input.value;
            operation(temp, lastOperator, secondNumber)
            console.log("1st Enter")
        }
        enterLast = true;
        enter();
    }
}

const operation = (temporary, operator, temporary2) => {
    if (operator == "+") {
        temp = +(temporary + +temporary2);
        //console.log("Passou aqui: " + vez++ + " vezes" )
    }

    if (operator == "-") {
        temp = +(temporary - temporary2);
    }

    if (operator == "*") {
        temp = +(temporary * temporary2);
    }

    if (operator == "/") {
        temp = +(temporary / temporary2);
    }

    console.log("op " + operator)
    console.log(temp)
    enterLast = false
    input.value = +temp;
    console.log(input.value)
}