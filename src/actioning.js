function myFunction() {
    let text;
    let person = prompt("Please Enter your name:", "name");
    if (person == null || person == "") {
        text = "User cancncelled the propmt.";
    } else {
        text = "Hello" + person + "!  haw re you today?";
    }
    document.getElementById("demo").innerHTML = text;
}