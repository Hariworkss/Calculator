// display numbers and symbols in text box
function displayNumber(number){
    result.value+=number;
    console.log(num);
}

// clear the box
function clearBox(){
    result.value='';
}

// evaluate expression
function evaluateExpression(){
    // exp=result.value;  //what we give eg:- 7+7
    // output=eval(exp);   //eval() is a js method to evaluate expression
    // result.value=output;

    result.value=eval(result.value);    // in one line

}

//remove last item from text box
function removeLast(){
    currentexp=result.value;
    result.value=currentexp.slice(0,-1);
}
