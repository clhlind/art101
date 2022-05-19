/**
 * Author:    Claira Lind
 * Created:   05.09.2022
 *
 * (c) Copyright by ME.
 **/
 //loops
 //given a number and an object that looks like this:
 //   {3: "Fizz", 5: "Buzz", 7: "Boom"}
    console.log("yes my function is running")
 // loops over the numbers and outputs the number and the matching text
 // for factors
 function fizzBuzzBoom() {
    console.log("yes my function is running")
 // iterate over all of out numbers
 for (var i=1; i<=200; i++) {
 // reset output string
 var str = '';
 // iterate over the factors we got from the html
 if (i % 3 == 0) {
 str += "Fizz";
  }
  if (i % 5 == 0) {
  str += "Buzz";
   }
   if (i % 7 == 0) {
   str += "Boom";
    }
 if (str =='') {
 str += i;
}
 $("output").append("<p>" + str + "</p>")
  }
}
fizzBuzzBoom();
