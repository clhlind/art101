/**
 * Author:    Claira Lind
 * Created:   05.09.2022
 *
 * (c) Copyright by ME.
 **/
 //lab starts here
 //for this function we are going to sort letters in someone's name
 function nameSorter(x){
   //using the user's input, add a little comment
   document.getElementById("output").innerHTML="<br>"+x+"</br> That's a cool name, I guess. <br>";
   documenr.getElementById("output1").innerHTML=("I'm going to switch the letters in your name, deal with it.<br>");
   //start by making the name into an array and printing out the result
   var split = x.split('');
   document.getElementById("output2").innerHTML=("First, we'll split up the letters in your name: <b>"+split+" </b><br>");
   //then we sort the stings in that array and join them
   split.sort();
   var joined = split. join('');
   //then add another little comment and return the value so it can print.
   document.getElementById("output3").innerHTML=("We're rearranging them in alphabetical order. . .  <br>");
   return joined;
   }
   //Get the user's inout
   var userName = window.prompt ("What's your name?");
   //Call the function and add the user input
   var outputel= document.getElementById("output")
   document.getElementById('output4').innerHTML=("See! Your name is cooler now <b>"+nameSorter(name)+"</b<br>");
