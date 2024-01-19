// Clear User Input

function clearResults() {
    const clear = document.getElementById("clear")
    clear.addEventListener("click", function () {
        console.log("Clear");
    })
}





function inputArray(userInput) {
    let inputArray = [];
    for (let index = 0; index <= userInput; index++) {
        inputArray.push(index);
    }
    console.log(inputArray);
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