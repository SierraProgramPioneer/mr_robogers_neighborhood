// UI Logic

// Clear User Input

function clearResults() {
    const clear = document.getElementById("clear")
    clear.addEventListener("click", function () {
        console.log("Clear");
    })
}


function respond(response) {
    console.log(response)
}


function interpretNumber(number) {
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


function processArray(inputArray) {
    let outputArray = [];
    inputArray.forEach(function (number) {
        let output = interpretNumber(number);
        outputArray.push(output);
    });
    const response = outputArray.join(" ");
    respond(response);
}


function inputArray(userInput) {
    let inputArray = [];
    for (let index = 0; index <= userInput; index++) {
        inputArray.push(index);
    }
    processArray(inputArray);
}


// Gather User Input
function gatherUserInput(event) {
    event.preventDefault();

    const userInput = parseInt(document.getElementById("number").value);
    inputArray(userInput);
}


// Add Event Listener to Form
function submitNumber() {
    let form = document.querySelector("form");
    form.addEventListener("submit", gatherUserInput);
}


// Window on Load Event Listener
window.addEventListener("load", function () {
    submitNumber();
    clearResults();
});