// Store our API endpoint as queryUrl
var queryUrl = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=" +
  "2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

// Perform a GET request to the query URL
/* EarthQuake_data = d3.json(queryUrl, function(EarthQuake_data) {
  console.log(EarthQuake_data.features);
  return EarthQuake_data;
  // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map

}); */

d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature
  });

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}


/* var earthquake = []
for (var key in EarthQuake_data) {
  // Set the marker radius for the state by passing population into the markerSize function
  earthquake.push(
    L.circle(EarthQuake_data[key].geometry.coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "red",
      radius: markerSize(EarthQuake_data[key].properties.mag)
    }).bindPopup("<h1>" + EarthQuake_data[key].properties.place + "</h1>"
  ));

}

console.log(earthquake) */
function createMap(earthquakes) {
// Define streetmap and darkmap layers
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
      "access_token=pk.eyJ1IjoieHpoYW5nIiwiYSI6ImNqaHhoc2xzYzBienozcG1oY3U2cXgwbjQifQ.O_YXelbj-noVyqfLcyeItA");

    var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?" +
      "access_token=pk.eyJ1IjoieHpoYW5nIiwiYSI6ImNqaHhoc2xzYzBienozcG1oY3U2cXgwbjQifQ.O_YXelbj-noVyqfLcyeItA");

    // Define a baseMaps object to hold our base layers
    var baseMaps = {
      "Street Map": streetmap,
      "Dark Map": darkmap
    };

    var earthquakeLayer = L.layerGroup(earthquakes);
    var overlayMaps = {
        Earthquakes: earthquakes
    };


    // Create a new map
    var myMap = L.map("map", {
      center: [
        37.09, -95.71
      ],
      zoom: 5,
      layers: [streetmap, earthquakes, darkmap]
    });

    // Create a layer control containing our baseMaps
    // Be sure to add an overlay Layer containing the earthquake GeoJSON
    L.control.layers(baseMaps,overlayMaps, {
      collapsed: false
    }).addTo(myMap);
}