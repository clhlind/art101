/**
 * Author:    Claira Lind
 * Created:   05.09.2022
 *
 * (c) Copyright by ME.
 **/
 //lab starts here
//Added a popup text for problems
$(document).ready(function () {
  $("#change-text2").click(function () {
    $("#toggle-text2"). fadeOut (function () {
      $("#toggle-text2").text(($("#toggle-text2").text() == 'Show Text') ? 'Hide Div' :
'The Problems with these labs are that their so open ended so you bascially can do this lab over 50 different ways. Other than choosing whihc one to experiment with, my partner and I had no problems').fadeIn();
    })
  })
});
//Added popup text for Challneges
$(document).ready(function () {
  $("#change-text1").click(function () {
      $("#toggle-text1").fadeOut(function () {
        $("#toggle-text1").text(($("#toggle-text1").text() == 'Show Text') ? 'Hide Div' :
'The Challenges was to work with a partner and use jQuery and experiment with its libary, which can be used to hide and show text').fadeIn();
    })
  })
});
//Added popup tet for Results
$(document).ready (function () {
  $("#change-text3" ).click (function () {
    $("#toggle-text3").fadeOut (function () {
      $("#toggle-text3").text (($("#toggle-text3").text() == 'Show Text') ? 'Hide Div' :
'The results can be see on this webpage. The buttons can be used to display text, although the text keeps on fading in and out').fadeIn();
    })
  })
});
