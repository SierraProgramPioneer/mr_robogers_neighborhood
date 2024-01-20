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





