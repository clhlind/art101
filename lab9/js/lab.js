/**
 * Author:    Claira Lind
 * Created:   05.04.2022
 *
 * (c) Copyright by ME.
 **/
//the lab starts here
//create a new element "output"
var outputEl = document.getElementById("output");
outputEl.style.backgroundColor = "pink";

//create a new element
var new1El = document.createElement("p");
new1El.innerHTML = "Is this working???";
new1El.style.color = "hotpink";
new1El.style.decoration = "underline";

//create a second new element
var new2El = document.createElement("p");
new2El.innerHTML = "I think this is working";
new2El.style.color = "hotpink";
new2El.style.decoration = "underline";

//add the elements to "output"
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
