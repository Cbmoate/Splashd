
var myDataRef = new Firebase('https://va3izfedini.firebaseio-demo.com/');
var locationsRef = myDataRef.child('locations')

locationRef.set({
  lon, lat:{
    rating: "4"
    comment: "This bathroom is pretty okay"
  }
});