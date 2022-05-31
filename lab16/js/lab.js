/**
 * Author:    Claira Lind
 * Created:   05.09.2022
 *
 * (c) Copyright by ME.
 **/
//var endpoint = "https://api.nasa.gov/planetary/apod";
var endpoint = "https://api.nasa.gov/planetary/apod";
function getAjax() {
  $.ajax({
    url: endpoint,
    type: "GET",
data: {
  api_key: "0JpHHNGBd500KLTVOjR6w3nq4AOVP3kSsvzZtgxK",
    count: 1
  }
})
. done(function(data){
console.log("Worked!");
var firstAPOD = data[0];
console.log(firstAPOD);
var title = firstAPOD.title;
var alt = firstAPOD.explanation;
var img = firstAPOD.url;
console.log(title, alt, img);
$("#output").html("<h5>" + title + "<h5>");
$("#output").append("<img src='" + img + "'>");
$("#output").append("<p>" + alt + "</p>");
  })
  .fail(function(request,error){
    $("#output").html("Something messed up dog.");
  })
}
$("button").click(getAjax);
