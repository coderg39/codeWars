// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!

// P: 3 parameters total. 2 positive integers. 1 math operator. a is first number, and b, second in the operation. Four operators could be any string 'add', 'minus', etc.
// R: return the result of the two numbers having the operator used on them.
// E: 5, 2, 'subtract' => 3
// P:

function arithmetic(a, b, operator){
  
    // if else conditions for each operator
    if ( operator == 'add' ) { return a+b }
    else if ( operator == 'subtract' ) { return a-b }
    else if ( operator == 'divide' ) { return a/b }
    else { return a*b }
  
}
