$(document).ready(function() {
    $( "#datepicker" ).datepicker();
    $('.parallax-window').parallax({imageSrc: '20141025_2108_editedbw.jpg'});
    $(".form").validate(); 
    
    $(function() {
    var availableTags = [
      "Amber",
      "Mike",
      "Margot",
      "Eloise",
      "Andrea",
      "Mia",
      "Evan",
      "Jackie",
      "JD",
      "Aaron",
      "Willow",
      "Steve",
      "Jenny",
      "Drew",
      "Quinn",
      "Claire"
    ];
    
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    });

    $(function() {
    $( "#dialog" ).dialog();
    });
    
});