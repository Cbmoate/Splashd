$(document).ready(function() {
  $(".btn-warning").on("click", function(e) {
    e.preventDefault();
    var newResultColumn;
    var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyA_Xc6XLbSKUd3en0i9HAfcwvQ7Tgw_Gs4";
    googleApiUrl += "&address=" + userAddress;

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
        mapiaApiUrl += "&coordsby=latlon"
        mapiaApiUrl += "&lon_min=" + long_min;
        mapiaApiUrl += "&lat_min=" + lat_min;
        mapiaApiUrl += "&lon_max=" + long_max;
        mapiaApiUrl += "&lat_max=" + lat_max;
        mapiaApiUrl += "&format=json";
        mapiaApiUrl += "&pack="
        mapiaApiUrl += "&language=en";
        mapiaApiUrl += "&page=1"
        mapiaApiUrl += "&count=5";
        mapiaApiUrl += "&category=74";
        console.log(mapiaApiUrl)
        $.ajax({
          type: "GET",
          url: mapiaApiUrl,
          success: function (response) {
            var colDiv = $("<div>").addClass("col-md-2");
            var thumbnailDiv = $("<div>").addClass("thumbnail");
            var placeImg = $("<img>").attr("src", "https://pbs.twimg.com/profile_images/661244915725287424/C7vPnSSE_400x400.jpg");
            var placeTitleDiv = $("<div>").addClass("placeTitle");
            var places = response.places;
            var placeName = $("<p>").append(places);
            for (var i = 0; i < places.length; i++) {
              $(".resultsRow").append(placeName)
                .append(colDiv)
                .append(thumbnailDiv)
                .append(placeImg)
                .append(placeTitleDiv)
                .append(placeName);
              console.log(places[i])
              return colDiv;
            };
          }
        })
      }
    });
  });  
});