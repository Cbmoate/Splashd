
var myDataRef = new Firebase("https://sizzling-torch-4957.firebaseio.com/");
var commentMessage = $(".wallComment");
var building = $();

$(".btn btn-primary").on("click", function comments(){
  var comment = commentMessage.val();
  var location = building.val();

  myDataRef.update({place: location, review: comment });
  commentMessage.val('');
});

myDataRef.limitToLast(10).on('child_added', function(snapshot){

  var data = snapshot.val();
  var comment = data.review;

});