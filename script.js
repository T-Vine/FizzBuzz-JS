let iterator = 0;
let value1;
let value2;
let mainValue;
let isFizzorBuzz;

let errorMessage = document.querySelector("#errorMessage");


let input = document.querySelector("#player1"); 
let input2 = document.querySelector('#player2');

input.addEventListener("keypress", myFunc);
input.addEventListener("keypress", myFunc); //both should call the same function

function myFunc(event) {
    

    if (event.key === "Enter") {
        console.log("Iterator"); //checking iterator
        iterator += 1; //incrementing iterator

        event.preventDefault();
        value1 = input.value;
        value2 = input.value;
        
        if (value1 >= iterator) {
            mainValue = value1;
        } else {
            mainValue = value2;
        }
        console.log(iterator); //testing for iterator
        //Decision for message
        if (parseInt(mainValue) > 0 && parseInt(mainValue) < 1000) {
            mainValue = parseInt(mainValue);
        }
        
        /* console.log(typeof(mainValue)); //testing
        console.log(isNaN(mainValue)); //testing
        */
        /* if (mainValue) {
            errorMessage.style.display = "block";
            console.log("Not integer") //testing
        } else { */
            if (iterator === mainValue) {
                console.log("Equal");
            } 

            if (iterator % 3 === 0 &&  iterator % 5 === 0) {
                if (String(mainValue).toUpperCase() == "FIZZBUZZ") {
                    console.log("Fizz Buzz!");
                } else {
                    errorMessage.style.display = "block";
                }
            }

            else if (iterator % 3 === 0) {
                console.log("Modulo 3") //testing
                if (String(mainValue).toUpperCase() == "FIZZ") {
                    console.log("Found fizz"); //testing if fizz  
                      
                } else {
                    errorMessage.style.display = "block";
                }
            }
            else if (iterator % 5 === 0) {
                console.log("Modulo 5");
                if (String(mainValue).toUpperCase() == "BUZZ") {
                    console.log("Found buzz.");
                } else {
                    errorMessage.style.display = "block";
                }
            } 
            if (iterator === 1 || iterator === 2) {
                isFizzorBuzz = 1;
                console.log(isFizzorBuzz+" is the fizz or buzz variable."); //testing
            } else {
                isFizzorBuzz = iterator % 3 + iterator % 5;
                console.log(isFizzorBuzz+" is the fizz or buzz variable."); //testing
            }
            
            strMain = String(mainValue).toUpperCase();

            if ((iterator !== mainValue) && (strMain !== "FIZZ"  /*&& isFizzorBuzz === 0 */) && (strMain !== "BUZZ" /* && isFizzorBuzz === 0*/) && (strMain !== "FIZZBUZZ" /*&& isFizzorBuzz === 0*/)) {
                console.log(mainValue, iterator)
                console.log("Not equal.") //testing if equal
                errorMessage.style.display = "block";
            }
            
            } 
            
        /* if (mainValue === iterator) {
            console.log("Incorrect"); //testing 
            errorMessage.style.display = "block";
        } */
        //console.log("Enter Working ..."); //testing)
    }
    //console.log("Working..."); //Testing
//}