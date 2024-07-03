const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const numButtons = document.querySelectorAll(".num")
const operatorKeys = document.querySelectorAll(".operatorKeys")
const equalsSign = document.querySelector(".equalsSign")
const clearKey = document.querySelector(".clearKey")

let displayNum = ""
let firstNum ;
let operator ;
let secondNum ;
let operatorClicked = false


function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operate(n1, operator, n2){
    let result ;
    if (operator === "+") {
        result = add(parseFloat(n1),parseFloat(n2))
        display.textContent = result
        firstNum = result
        displayNum = firstNum
    } else if(operator === "-"){
        result = subtract(parseFloat(n1),parseFloat(n2))
        display.textContent = result
        firstNum = result
        displayNum = firstNum
    } else if (operator === "*"){
        result = multiply(parseFloat(n1),parseFloat(n2))
        display.textContent = result
        firstNum = result
        displayNum = firstNum
    } else if (operator === "/"){
        result = divide(parseFloat(n1),parseFloat(n2))
        display.textContent = result
        firstNum = result
        displayNum = firstNum
    }
}

numButtons.forEach(numButton => {
    numButton.addEventListener("click", (e) => {
        let value = e.target.textContent
        displayNum += value
        display.textContent = displayNum

        if (operatorClicked === true) {
            secondNum = displayNum
        } else{
            firstNum = displayNum
        }
    })
})

operatorKeys.forEach(operatorKey => {
    operatorKey.addEventListener("click", (e) => {
        
        if(operatorClicked === true){
            operate(firstNum,operator,secondNum)
            displayNum = ""
            operator = e.target.textContent
            console.log("Operator clicked", operatorClicked);
        } else if (firstNum !== undefined){
            operator = e.target.textContent
            operatorClicked = true
            displayNum = ""
        }
    })
})


equalsSign.addEventListener("click", () => {
    if (firstNum !== undefined && secondNum !== undefined) {
        operate(firstNum,operator,secondNum)
        operatorClicked = false
    }
})


clearKey.addEventListener("click", () => {
    display.textContent = ""
    firstNum = ""
    operator = ""
    displayNum = ""
    secondNum = ""
    operatorClicked = false
})