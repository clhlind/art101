/**
 * Author:    Claira Lind
 * Created:   04.27.2022
 *
 * (c) Copyright by Blub Corp.
 **/
 //For this function, we are going to short the letters in someone's name.
 function nameSorter(x){
 //using the User's input, add a little comment
 document.writeln("<b>"+x+"</b> hu? That's a cool name, I guess. <br>");
 document.writeln("I'm going to switch the letters in your name, deal with it.<br>");
 //start by making the name into an array and printing out the result
 var split = x.split('');
 document.writeln("First, we'll split up the letters in your name: <b>"+split+" </b><br>");
 //then we sort the stings in that array and join them
 split.sort();
 var joined = split. join('');
 //then add another Little comment and return the value so it can print.
 document.writeln("We're rearranging them in alphabetical order. . .  <br>");
 return joined;
 }
 //Get the user's inout
 var userName = window.prompt ("What's your name?");
 //Call the function and add the user input
 document.writeln("See! Your name is cooler now <b>"+nameSorter(userName)+"</b<br>");
