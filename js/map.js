
  function initMap() {
    var myLatLng = {lat: 40.525751, lng: -74.438212};
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
  $("#showResults").on("click", function initMap() {
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

    
