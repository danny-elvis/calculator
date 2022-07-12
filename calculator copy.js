class Operation {
    constructor() {

        this.firstNumber = null
        this.operationChosen = null
        this.secondNumber = null
        this.result = null
    }

    operation() {
        console.log(this.firstNumber, this.operationChosen , this.secondNumber)
        if(this.operationChosen == '+'){
            this.result = +this.firstNumber+this.secondNumber;;
            this.operationChosen = null;
        } else {
            this.result += this.secondNumber; 
        }

        if(this.operationChosen == '-'){
            this.result = +this.firstNumber-this.secondNumber;
            this.operationChosen = null;

        } else {
            this.result -= this.secondNumber; 
        }
    }

    plus() {
        this.firstNumber = +display.textContent
        this.operationChosen = "+"
        enterButton.setAttribute("onclick", "newOperation.enter()");
        console.log(this.firstNumber , "+" )
        
    }

    minus() {
        this.firstNumber = +display.textContent
        this.operationChosen = "-"
        enterButton.setAttribute("onclick", "newOperation.enter()");
        console.log(this.firstNumber , "-" )
        
    }

    enter() {
        newOperation.operation();
        display.textContent = ""
        display.textContent = this.result;
        console.log("click enter")
    }
}

let newOperation = new Operation
let enterButton = document.getElementById("enter")
let display = document.getElementById("display").firstElementChild
display.textContent = 0

function clearDisplay(){
    display.textContent = 0
    newOperation.firstNumber = null
    newOperation.secondNumber = null
}

function clicked(content){

    if(display.textContent == 0 ){
        
        console.log("if")
        display.textContent = content;

    } else if(newOperation.firstNumber == null) {
        console.log("else if")
        display.textContent = display.textContent+content;
        console.log(newOperation.firstNumber)
        
    } else {
        console.log("else");
        display.textContent = content;
        newOperation.secondNumber = +content;
        console.log(+content)
        
    }
}
