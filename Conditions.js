if (10 > 5) {
    document.getElementById("demo").innerHTML = "I did it!";
}




var hour = new Date().getHours();
var greeting;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
