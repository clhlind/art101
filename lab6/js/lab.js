/*
 * Author:    Claira Lind
 * Created:   4.25.2022
 * (c) Copyright by Blub Corp.
 */

 // Define Variables
 myTransport = ["Mazda CX5", "cruiser bike", "walk", "rides from boyfriend"];

 myMainRide = {
   make: "Mazda",
   model: "CX5",
   color: "navy",
   year: 2015,
   age : function() {
     return 2022 - age;
   }
 }

 // output
 document.writeln("Kinds of Transportation I Use: ", myTransport, "</br>");
 document.wrtieln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
