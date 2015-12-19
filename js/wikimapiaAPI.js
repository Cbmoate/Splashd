$(document).ready(function(){
  
  $.ajax({
    type: "GET", 
    url: 'http://api.wikimapia.org/?key=56865362-4D0D7AE0-2211572B-29D17814-86AB49B5-E63BC1B3-5442994D-3AE8CA0D&function=place.getbyarea&coordsby=bbox&bbox=2.292493%2C48.8590143%2C2.293493%2C48.8599143&format=json&pack=&language=en&page=1&count=50&category=&categories_or=&categories_and=',
    success: function(happy){
      console.log(happy);
    }
  });


});