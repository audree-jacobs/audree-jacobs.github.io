/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(number1, number2) {

    var sum = number1 + number2;
    return(sum); 
}

function addNumbers(addend1, addend2) {

    add(addend1, addend2);
    document.getElementById("sum").innerHTML = sum;
}

function subtract(number1, number2){

    var difference  = number1 - number2;
    return(difference); 
}

function subtractNumbers(minuend1, minuend2){

    subtract(minuend1, minuend2);
    document.getElementById("difference").innerHTML = difference;

}

function multiply(number1, number2) {

    var product = number1 * number2;
    return(product);    
}

function multiplyNumbers(factor1, factor2) {

    multiply(addend1, addend2);
    document.getElementById("product").innerHTML = product;
}

function year(){
    
    var x = new Date();
    var y = new Date().getFullYear;
    document.getElementById("year").innerHTML = "y";

}

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

var currentDate = new Date(); 

// Step 2: Declare a variable to hold the current year

var year; 

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

year = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.getElementById('year').innerHTML = year; 

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.getElementById('array').innerHTML = myArray

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

document.getElementById('odds').innerHTML = myArray.filter(number => number % 2);

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

document.getElementById('evens').innerHTML = myArray.filter(number => number % 2 == 0);

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

document.getElementById('sumOfArray').innerHTML = myArray.reduce((sum, number) => sum + number, 0);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

document.getElementById('multiplied').innerHTML = myArray.map(number => number * 2);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

document.getElementById('sumOfMultiplied').innerHTML = myArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);