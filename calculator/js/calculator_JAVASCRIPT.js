const Calculator = {
    //will display 0 on the calculator.
    Display_Value: '0',
    //hold first operand for any expressions.
    First_Operand: null,
    //checks wether or not second operands has been inputted by the user.
    Wait_Second_Operand: false,
    //will hold the operator.
    operator: null,
};

//This modifies values each time a button is clicked on.
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //checks if the Wait second operand is true and sets display value.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//Handles decimal points.
function Input_Decimal(dot) {
    //this ensure that accidently clicking of decimal point doesnt cause bugs.
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//handles operators.
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input =parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed (9);
        //this will remove any trailing 0 s.
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
 
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//function  updates calculator screen with the contents of display value.
function Updates_Display() {
    //make use of the calculator screen class to target the input tag in html doc.
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Updates_Display();
//this section monitors button click.
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event)=> {
    //the target variable is an object that represent the element that was clicked.
    const{ target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator (target.value);
        Updates_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Updates_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Updates_Display();
        return;
    }
    Input_Digit(target.value);
    Updates_Display();
}) 