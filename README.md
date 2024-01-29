# Mr. Robogers Neighborhood

#### By [Melissa Parker](https://github.com/SierraProgramPioneer)

## Table of Contents
1. Technologies Used
2. Description
3. Setup Requirements
4. Link
5. Tests
6. Known Bugs
7. License

## Technologies Used 

* HTML5
*  CSS5
*  JavaScript
*  Bootstrap
*  Test Driven Development

## Description

* This is an independent project assigned from Epicodus to demonstrate knowledge learned under Learn How to Program.
* This project is was part of the Arrays & Looping section under Intro to Programming.
* On the webpage user can input any integer to receive a response from the robot.
* TDD included in this file.

## Setup Requirements
1. Clone this repository to your desktop.
2. Navigate to the top level of the directory.
3. Open index.html in your browser.

## Link

[Mr. Robogers Neighborhood]()

## Tests

    > Describe: addSubmitListener
    Test: "It should add an event listener to the Validate Card Button"
    Code: 
        form = document.querySelector("form");
        form.addEventListener("submit", validateCard);
    
        function validateCard(event) {
        event.preventDefault();
        console.log("Validate Reached");
    
    Expected Output: Validate Reached
    
    ______
    
    > Describe: gatherCardNumber
    Test: "It should return inputted number into the console.log
    Code: 
        inputtedNumber = document.getElementById("ccNumber").value;
        console.log(inputtedNumber);
    
    Input: 123
    
    Expected Output: 123
    
    > Describe: gatherCardNumber
    Test: "It should return the typeof input
    Code: 
        inputtedNumber = parseInt(document.getElementById("ccNumber").value);
        console.log(typeof inputtedNumber);
    
    Input: 123
    
    Expected Output: number
    
    _____
    
    > Describe: createArray
    Test: "It should turn each number into a number type and add each number to an array"
    Code: 
        let cardArray = [];
        for (let number of inputtedNumber) {
            number = parseInt(number);
            cardArray.push(number);
        }
        console.log(cardArray);
    
    Input: 1234
    
    Expected Output: [1, 2, 3, 4]
    
    
    
    _____
    
    > Describe: createNewArray
    Test: "It should output in console log the cardArray from createArray function"
    Code: 
    
    function createNewArray(cardArray) {
        console.log(cardArray);
    
    Input: 1234
    
    Expected Output: [1, 2, 3, 4]
    
    
    > Describe: createNewArray
    Test: "It should output the length of the cardArray"
    
    Code: 
    
        cardArrayLength = cardArray.length;
        console.log(cardArrayLength);
    
    Input: 123
    
    Expected Output: 3
    
    > Describe: createNewArray
    Test: "It should output every other inputted number, starting on the right"
    
    Code: 
    
        cardArrayLength = cardArray.length;
        for (let index = cardArrayLength - 1; index >= 0; index -= 2) {
            console.log(cardArray[index]);
    
    Input: 123456
    
    Expected Output: 6 4 2
    
    Input 2: 1234567
    
    Expected Output 2: 7 5 3 1
    
    
    > Describe: createNewArray
    Test: "It should output odd or even for each iteration of the loop, starting with odd"
    
    Code: 
    
        let iteration = 1;
        cardArrayLength = cardArray.length;
        for (let index = cardArrayLength - 1; index >= 0; index -= 1) {
            if (iteration % 2 === 1) {
                console.log("Is Odd")
            }
            else {
                console.log("Is Even")
            }
            iteration += 1;
    
    Input: 222
    
    Expected Output: Odd Even Odd
    
    > Describe: createNewArray
    Test: "It should pass an even or an odd number to determineAction"
    
    Code: 
    
        let iteration = 1;
        cardArrayLength = cardArray.length;
        for (let index = cardArrayLength - 1; index >= 0; index -= 1) {
            determineAction(iteration);
            iteration += 1;
        }
    
        function determineAction(iteration) {
    
        if (iteration % 2 === 1) {
    
            console.log("Change Number")
        }
        else {
            console.log("Leave Number As Is")
        }
    
    Input: 222
    
    Expected Output: Change Number, Leave Number as is, Change Number
    
    
    ____
    
    > Describe: sumArrayNumbers
    
    Test: "It should sum the total of numbers in the New Array"
    
    function sumArrayNumbers(newCardArray) {
        let sumOfNumbers = 0;
        newCardArray.forEach(function (number) {
            sumOfNumbers += number;
        })
        console.log(sumOfNumbers);
    }
    
    newArray [4, 1, 4];
    
    Expected Output: 9
    
    _____
    
    > Describe: endsInZero
    
    Test: "It notify if sum of digits ends in 0 or not"
    
    function endsInZero(sumOfNumbers) {
        if (sumOfNumbers % 10) {
            console.log("Does Not end in 0");
        } else {
            console.log("Ends in 0");
        }
    }
    
    Sum of Numbers: 24
    
    Expected Output: Does Not end in 0
    
    Sum of Numbers: 50
    
    Expected Output: Ends in 0
    
    ____
    
    > Describe: checkLength
    
    Test: "Return the number of digits in string of numbers"
    
    function checkLength(cardArray) {
        const length = cardArray.length;
        console.log(length);
    }
    
    Input: 1212
    
    Expected Output: 4
    
    > Describe: checkLength
    
    Test: "Will check if card length is 15 or 16 in length and return Valid
    
    function checkLength(cardArray) {
        const length = cardArray.length;
        console.log(length);
    }
    
    Input: 1212
    
    Expected Output: 4
    
    _____
    
    > Describe: checkCompany
    
    Test: "Will check if card starts with valid credit card company syntax"
    
        if (cardArray[0] === 4 || cardArray[0] === 5 || cardArray[0] === 6) {
            createNewArray(cardArray);
        }
        else if (cardArray[0] === 3) {
            if (cardArray[1] === 4 || cardArray[1] === 7) {
                createNewArray(cardArray);
            }
            else {
                result("Not a Valid Card Number, Not a Valid Company")
            }
        }
        else {
            result("Not a Valid Card Number, Not a Valid Company")
        }
    }
    
    
    Various Tests
    
    
    
    Describe: gatherUserinput(event)
    
    Test: "It should return an array containing the user's input
    Code: 
        const userInput = parseInt(document.getElementById("number").value);
        console.log(userInput);
    Input: 0
    Expected Output: 0
    
    
    Describe: inputArray(userInput)
    
    Test: "It should return an array that counts from 0 up to and including the user's input"
    Code: 
        let inputArray = [];
        for (let index = 0; index <= userInput; index++) {
            inputArray.push(index);
        }
        console.log(inputArray);
    Input: 5
    Expected Output: [0, 1, 2, 3, 4, 5]
    
    Describe: processAray(inputArray)
    
    Test: "It should return a new array that counts from 0 up to an including the user's input"
    Code:
        let outputArray = [];
        inputArray.forEach(function (number) {
            let output = number;
            outputArray.push(output);
        });
        console.log(outputArray);
    Input: 5
    Expected Output: [0, 1, 2, 3, 4, 5]
    
    
    Describe: processAray(inputArray)
    
    Test: "It should return a new array with updated output as a string"
    Code:
        const response = outputArray.join(" ");
        console.log(response)
    Input: 5
    Expected Output: 0 Beep! Boop! Won't you be my neighbor? 4 5
    
    
    
    Describe: interpretNumber(number)
    Test: "It should return Mr. Roboger's response depending on user input, with Beep! for an occurance of 1, Boop! for an occurance of 2, and Won't you be my neighbor? for 3"
    Code:
        const numberString = number.toString();
    
        // If includes 3 "Won't you be my neighbor?"
        if (numberString.includes('3')) {
            return "Won't you be my neighbor?"
        }
        // Else if includes 2 "Boop!"
        else if (numberString.includes('2')) {
            return "Boop!"
        }
        // Else if includes 1 "Beep!"
        else if (numberString.includes('1')) {
            return "Beep!"
        }
        else {
            return number;
        }
    }
    
    Input: 5
    Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5]


## Known Bugs

* No known bugs, program runs as expected.  Please contact the creator if bug is discovered.
* Last updated: January 19, 2024.

## License

[MIT](https://choosealicense.com/licenses/mit/) Copyright © 2024 Melissa Parker

Robot Image from [pngimg.com](https://pngimg.com/image/45342) 


