$(document).ready(function(){
  $(".btn-warning").on("click", function(e){
    e.preventDefault();
    var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyA_Xc6XLbSKUd3en0i9HAfcwvQ7Tgw_Gs4";
    googleApiUrl += "&address=" + userAddress;

    $.ajax({
      type: "GET",
      url: googleApiUrl,
      success: function(response) {
        var geoLocation = response.results[0].geometry.location;
        console.log(geoLocation);
      }
    });
  });
});