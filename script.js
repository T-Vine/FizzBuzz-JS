//main variables

let iterator = 0;
let value1;
let value2;
let mainValue;
//let isFizzorBuzz;

//selecting error message
let errorMessage = document.querySelector("#errorMessage");

//getting input fields
let input = document.querySelector("#player1"); 
let input2 = document.querySelector("#player2");

//adding event listeners
input.addEventListener("keypress", myFunc);
input2.addEventListener("keypress", myFunc); //both should call the same function

function myFunc(event) {
    

    if (event.key === "Enter") {
        
        iterator += 1; //incrementing iterator

        event.preventDefault();
        value1 = input.value;
        value2 = input2.value;
        
        //logging details for testing
        console.log("Value 1 is "+value1+". Value 2 is "+value2+".");
        console.log("The iterator is "+iterator); 
        
        if (value1 >= iterator) {
            mainValue = value1;
        } else {
            mainValue = value2;
        }
        
        
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
                console.log("Iterator Divisible by 5 and 3. Correct.");
            } else {
                errorMessage.style.display = "block";
            }
        } else if (iterator % 3 === 0) {
            console.log("Iterator divisible by 3.") //testing
            if (String(mainValue).toUpperCase() == "FIZZ") {
                console.log("Fizz Found: correct."); //testing if fizz  
                      
            } else {
                errorMessage.style.display = "block";
            }
        } else if (iterator % 5 === 0) {
            console.log("Iterator divisible by 5.");
            if (String(mainValue).toUpperCase() == "BUZZ") {
                console.log("Buzz Found: Correct.");
            } else {
                errorMessage.style.display = "block";
            }
        } else if (iterator !== mainValue) {
            errorMessage.style.display = "block";
        }
            /* ALSO LEGACY (see below)
            if (iterator === 1 || iterator === 2) {
                isFizzorBuzz = 1;
                console.log(isFizzorBuzz+" is the fizz or buzz variable."); //testing
            } else {
                isFizzorBuzz = iterator % 3 + iterator % 5;
                console.log(isFizzorBuzz+" is the fizz or buzz variable."); //testing
            }
            */
           /*
           legacy for catching fizz/buzz etc. before time. NOT WORKING.
            strMain = String(mainValue).toUpperCase();

            if ((iterator !== mainValue) && (strMain !== "FIZZ"  && isFizzorBuzz === 0 ) && (strMain !== "BUZZ"  && isFizzorBuzz === 0) && (strMain !== "FIZZBUZZ" && isFizzorBuzz === 0)) {
                console.log(mainValue, iterator)
                console.log("Not equal.") //testing if equal
                errorMessage.style.display = "block";
            }
            */
        } 
            
        /* Legacy: not working
         if (mainValue === iterator) {
            console.log("Incorrect"); //testing 
            errorMessage.style.display = "block";
        } */
        //console.log("Enter Working ..."); //testing)
}
    //console.log("Working..."); //Testing
//}