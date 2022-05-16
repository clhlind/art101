/**
 * Author:    Claira Lind
 * Created:   05.09.2022
 *
 * (c) Copyright by ME.
 **/
 // Return Hobbit, Elf, Dwarf, and Orc
// depending on length mod 4
function sortingmiddleearth(str) {
len = str.length;
mod = len % 4;
if (mod == 0) {
  return "Hobbit"
  }
else if (mod == 1) {
  return "Elf"
  }
else if (mod == 2) {
  return "Dwarf"
  }
else if (mod == 3) {
  return "Orc"
  }
}

var myButton = document.getElementById ("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById ("input").value;
  var middleearth = sortingmiddleearth(name);
  newText = "<p>Middle Earth has sorted you into " + middleearth + "</p>";
  document.getElementById("output").innerHTML = newText;
})
