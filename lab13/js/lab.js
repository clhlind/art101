/**
 * Author:    Claira Lind
 * Created:   05.09.2022
 *
 * (c) Copyright by ME.
 **/
 //loops
 //given a number and an object that looks like this:
 //{3: "Fizz", 5: "Buzz", 7: "Boom"}
 function mod(total, valOne, valTwo, valThr, valFour){
  var a ="Fizz!";
  var b ="Buzz!";
  var c ="Boom!";
  var d ="Bang!";

  var str = "";
  for(let i = 0; i <= total ;i++){
    if ((i % valOne == 0)&&(i % valTwo == 0)&&(i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+a+b+c+d+"<br>");

    } else if ((i % valOne == 0)&&(i % valTwo == 0)&&(i % valThr == 0)){
      str += (i +" "+a+b+c+"<br>");
    } else if ((i % valOne == 0)&&(i % valTwo == 0)&&(i % valFour == 0)){
      str += (i +" "+a+b+d+"<br>");
    } else if ((i % valOne == 0)&&(i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+a+c+d+"<br>");
    } else if ((i % valTwo == 0)&&(i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+b+c+d+"<br>");

    } else if ((i % valOne == 0)&&(i % valTwo == 0)){
      str += (i +" "+a+b+"<br>");
    } else if ((i % valOne == 0)&&(i % valThr == 0)){
      str += (i +" "+a+c+"<br>");
    } else if ((i % valOne == 0)&&(i % valFour == 0)){
      str += (i +" "+a+d+"<br>");
    } else if ((i % valTwo == 0)&&(i % valThr == 0)){
      str += (i +" "+b+c+"<br>");
    } else if ((i % valTwo == 0)&&(i % valFour == 0)){
      str += (i +" "+b+d+"<br>");
    } else if ((i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+c+d+"<br>");

    } else if (i % valOne == 0){
      str += (i +" "+a+"<br>");
    } else if (i % valTwo == 0){
      str += (i +" "+b+"<br>");
    } else if (i % valThr == 0){
      str += (i +" "+c+"<br>");
    } else if (i % valFour == 0){
      str += (i +" "+d+"<br>");

    } else {
      str += (i+"<br>");
    }
  }
  return str;
}

outputEl = $("#output");
submitEl = $("#submit");

submitEl.click(function(){
  totalEl  = $("#total").val();
  valOneEl = $("#valOne").val();
  valTwoEl = $("#valTwo").val();
  valThrEl = $("#valThr").val();
  valFourEl= $("#valFour").val();

  console.log(totalEl);
  outputEl.html(mod(totalEl, valOneEl, valTwoEl, valThrEl, valFourEl));
})
