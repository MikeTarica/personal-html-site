function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function myFunction() {
    document.getElementById("name").innerHTML = "Hello Dolly!";
    document.getElementById("answer").innerHTML = "How are you?";
}

function myFunction() {
    document.getElementById("myHeader").innerHTML = "Javascript Comments";
    document.getElementById("myParagraph").innerHTML = "Javascript Comments";
}

function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;

    // Displaying the value
    document.getElementById("myHeader").innerHTML = "Welcome";
    document.getElementById("myParagraph").innerHTML = (inputVal);
}
var x;

var name = prompt("Please enter your Name and Surname", "Harry Potter");
var gender = prompt("Please enter your gender", "male or female");
var male;
var female;

if (gender == male) {
    alert("Welcome, MR. " + name);
} else if (gender == female) {
    alert("Welcome, MS. " + name);
}