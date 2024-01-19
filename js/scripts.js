// Clear User Input

function clearResults() {
    const clear = document.getElementById("clear")
    clear.addEventListener("click", function () {
        console.log("Clear");
    })
}


// Gather User Input
function gatherUserInput(event) {
    event.preventDefault();
    console.log("Submit");
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