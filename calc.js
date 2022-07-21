//c delete 1 2 3 4 5 6 7 8 9 0 / * - + . , enter

let buttons = document.getElementsByTagName("button")

Array.from(buttons).forEach(element => {
    element.setAttribute("onclick", "clicked(this.textContent)") //Add onclick on every button
    element.setAttribute("onMouseUp", "this.blur()") //Prevent focus/doubleclick
    element.setAttribute("tabindex", "-1") //Prevent tab focus
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations = ["/", "*", "-", "+"];

let isNumber;
let isDot;
let operator;
let lastKey = null;
let dotUsed = false;
let enterDisabled;

//--------------------------------------------------->
function clicked(e) {

  isMouseClick = true;

  document.dispatchEvent(
      new KeyboardEvent("keyup", {
          key: e,
      })
  );

}
//--------------------------------------------------->


function whichKey(e) {
  isNumber = false;

  for (let i = 0; i < operations.length; i++) {
    if (e == operations[i]) {
      operator = e;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (e != " " && e == numbers[i]) {
      e = +e;
      isNumber = true;
    }
  }

  switch (e) {
    case ".":
    case ",":
      displayDot();
      break;
    case "-":
    case "+":
    case "/":
    case "*":
      operation(e);
      break;
    case "Enter":
    case "=":
      evaluate();
      break;
    case "C":
    case "Backspace":
    case "Delete":
      clearDisplay();
      break;
    default:
      display(e);
      break;
  }
}

let displayDot = () => {
  if (!dotUsed && (lastKey == null || typeof lastKey == "number")) {
    input.innerHTML += ".";
    dotUsed = true;
    lastKey = ".";
    return;
  }
};

let display = (e) => {
  if (isNumber && (lastKey == null || lastKey == 'Enter')) {
    input.innerHTML = e;
  } else if (isNumber) {
    input.innerHTML += e;
  }
  lastKey = e;
};

let operation = (e) => {
  if (lastKey == null && e == "-") {
    input.innerHTML = e;
  } else if (typeof lastKey == "number" || enterDisabled) {
    input.innerHTML += e;
  } else if (e != lastKey && lastKey != null) {
    input.innerHTML = input.innerHTML.slice(0, -1) + e;
  } else {
    return;
  }
  enterDisabled = null;
  dotUsed = false;
  lastKey = e;
};

let evaluate = () => {
  if (enterDisabled == null) {
    memory.innerHTML = input.innerHTML;
    input.innerHTML = eval(input.innerHTML);
    if (input.innerHTML.length > 10) {
      input.innerHTML = eval(memory.innerHTML).toFixed(4).slice(0, -1);
    }
  }
  enterDisabled = true;
  lastKey = 'Enter';
};

function clearDisplay() {
  memory.innerHTML = "";
  input.innerHTML = 0;
  lastKey = null;
  enterDisabled;
}

document.addEventListener("keyup", (event) => {
  const keyName = event.key;
  //console.log("key: " + keyName);
  whichKey(keyName);
});
