var initialLocation;
// var rutgers = new google.maps.LatLng(40.525751, -74.438212);
// var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
// var browserSupportFlag =  new Boolean();
// var myLatLng = {lat: 40.525751, lng: -74.438212};


function initMap() {
  var myLatLng = {lat: 40.525751, lng: -74.438212};
  var myWork = {lat: 40.854982, lng: -74.414214};
  var map = new google.maps.Map(document.getElementById("resultMap"), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Rutgers"
  })
}

// Current location function begins
$(".btn-danger").on("click", function initMap() {
  var map = new google.maps.Map(document.getElementById("resultMap"), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 15
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent("You're here");
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
});

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        "Error: The Geolocation service failed." :
                        "Error: Your browser doesn\'t support geolocation.");
}
// Current location function ends


    // var myOptions = {
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // console.log("dude")
    // var myWork = {lat: 40.803448, lng: -74.165557};
    // var map = new google.maps.Map(document.getElementById("resultMap"), myOptions);

    // // Try W3C Geolocation (Preferred)
    // if(navigator.geolocation) {
    //   browserSupportFlag = true;
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    //     map.setCenter(initialLocation);
    //   }, function() {
    //     handleNoGeolocation(browserSupportFlag);
    //   });
    // }
    // // Browser doesn't support Geolocation
    // else {
    //   browserSupportFlag = false;
    //   handleNoGeolocation(browserSupportFlag);
    // }

    // function handleNoGeolocation(errorFlag) {
    //   if (errorFlag == true) {
    //     alert("Geolocation service failed.");
    //     initialLocation = myWork;
    //   } else {
    //     alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
    //     initialLocation = myWork;
    //   }
    //   map.setCenter(initialLocation);
    // }
  
