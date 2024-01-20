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