//Instead of writing:
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";


var i;

for (var i = 0; i < 3; i++){
    console.log(i);
}

for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}



for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
}



while (i < 10) {
    text += "The number is " + i;
    i++;
}
//output add
