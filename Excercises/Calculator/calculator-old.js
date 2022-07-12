let buttons = document.getElementsByTagName("button");
let display = ""

for(let i = 0; i < buttons.length; i = i + 1) {
    content = buttons[i].textContent
    //buttons[i].setAttribute("onclick", "clicked(this.textContent);");

}

function clicked(content){
    
    if(verifyDisplay()){
        
        display = content;
        console.log(display);
    } else {
        display = display+content;
        console.log(display);
    }


clearDisplay(content);
}






function verifyDisplay(){
    if(display == ""){
        return true;
    } else {
        return false;
    }
}

function clearDisplay(content){

    if(content == "C"){
        display = "";
        console.log("Display Limpo")
    }
}

function enter(){
    if(content == "Enter"){

        return (firstNumber, secondNumber, operation)
    }
}