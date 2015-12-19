

function initMap() {
  var myLatLng = {lat: 40.525751, lng: -74.438212};


  var map = new google.maps.Map(document.getElementById("resultMap"), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Google Map Results"
  });
}

