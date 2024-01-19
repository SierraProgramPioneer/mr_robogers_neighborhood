Describe: gatherUserinput()

Test: "It should return an array containing the user's input
Code: 
    let inputArray = []

    const userInput = parseInt(document.getElementById("number").value);
    inputArray.push(userInput);
    console.log(inputArray);
    
Input: 0
Expected Output: [0]