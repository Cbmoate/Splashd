var navigationFn = {
  goToSection: function(id) {
    $('html, body').animate({
      scrollTop: $(id).offset().top
      }, 1500);
    }
  }

var map;

  $(".btn-warning").on("click", function(e) {
    e.preventDefault();
    var newResultColumn;
    var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyA_Xc6XLbSKUd3en0i9HAfcwvQ7Tgw_Gs4";
    googleApiUrl += "&address=" + userAddress;
    navigationFn.goToSection("#rSection");
    $(".resultsRow").empty();

$.ajax({
      type: "GET",
      url: googleApiUrl,
      success: function(response) {
        var geoLocation = response.results[0].geometry.location;
        var longitude = geoLocation.lng;
        var latitude = geoLocation.lat;

        // 1 degree latitude is roughly 111km, 0.001 degrees lat is about 100m
        var lat_min = latitude - 0.010;
        var lat_max = latitude + 0.010;

        // 1 degree longitude is not a static value
        // it varies in terms of physical distance based on the current latitude
        // to compute it in meters, we do cos(latitude) * 111000
        var meters_per_longdeg = Math.cos((3.141592 / 180) * latitude) * 111000;

        // then we can work out how much longitude constitutes a change of ~100m
        var range = 100 / meters_per_longdeg;

        var long_min = longitude - 0.010;
        var long_max = longitude + 0.010;

        var mapiaApiUrl = "http://api.wikimapia.org/?";
        mapiaApiUrl += "key=56865362-4D0D7AE0-2211572B-29D17814-86AB49B5-E63BC1B3-5442994D-3AE8CA0D";
        mapiaApiUrl += "&function=place.getbyarea";
        mapiaApiUrl += "&coordsby=latlon";
        mapiaApiUrl += "&lon_min=" + long_min;
        mapiaApiUrl += "&lat_min=" + lat_min;
        mapiaApiUrl += "&lon_max=" + long_max;
        mapiaApiUrl += "&lat_max=" + lat_max;
        mapiaApiUrl += "&format=json";
        mapiaApiUrl += "&pack=";
        mapiaApiUrl += "&language=en";
        mapiaApiUrl += "&page=1";
        mapiaApiUrl += "&count=5";
        mapiaApiUrl += "&category=74";


        $.ajax({
          type: "GET",
          url: mapiaApiUrl,
          success: function (response) {
            var places = response.places;
            var placeName = places[0].title;
            for (var i = 0; i < places.length; i++) {

             /* create map
             */
            var map = new google.maps.Map(document.getElementById("resultMap"), {
              center: new google.maps.LatLng(places[0].location.lat, places[0].location.lon),
              zoom: 14,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            /*
             * create infowindow (which will be used by markers)
             */
            var infoWindow = new google.maps.InfoWindow();

            /*
             * marker creater function (acts as a closure for html parameter)
             */
            function createMarker(options, html) {
              var marker = new google.maps.Marker(options);
              if (html) {
                google.maps.event.addListener(marker, "click", function () {
                  infoWindow.setContent(html);
                  infoWindow.open(options.map, this);
                });
              }
              return marker;
            }

            /*
             * add markers to map
             */
            var marker0 = createMarker({
              position: new google.maps.LatLng(places[0].location.lat, places[0].location.lon),
              map: map,
              icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
            }, "<h1>Marker 0</h1><p>This is the home marker.</p>");

            var marker1 = createMarker({
              position: new google.maps.LatLng(places[1].location.lat, places[1].location.lon),
              map: map
            }, "<h1>Marker 1</h1><p>This is marker 1</p>");

            var marker2 = createMarker({
              position: new google.maps.LatLng(places[2].location.lat, places[2].location.lon),
              map: map
            }, "<h1>Marker 2</h1><p>This is marker 2</p>");

            var marker3 = createMarker({
              position: new google.maps.LatLng(places[3].location.lat, places[3].location.lon),
              map: map
            }, "<h1>Marker 3</h1><p>This is marker 3</p>");

            var marker4 = createMarker({
              position: new google.maps.LatLng(places[4].location.lat, places[4].location.lon),
              map: map
            }, "<h1>Marker 4</h1><p>This is marker 4</p>");

          }


}
});
}
});
});