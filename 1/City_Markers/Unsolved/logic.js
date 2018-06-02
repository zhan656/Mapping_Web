// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4.6
});

// Add a tile layer to the map
L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
      "access_token=pk.eyJ1IjoieHpoYW5nIiwiYSI6ImNqaHhoc2xzYzBienozcG1oY3U2cXgwbjQifQ.O_YXelbj-noVyqfLcyeItA"
  ).addTo(myMap);

// City markers

// Add code to create a marker for each city below and add it to the map

// newyork;
var marker_newyork = L.marker([40.73, -73.93], {
  draggable: true,
  title: "NY Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker_newyork.bindPopup("Hello New York!");


// chicago;
var marker_chicago = L.marker([41.88,-87.62], {
  draggable: true,
  title: "Chicago Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker_chicago.bindPopup("Hello Chicago!");


// houston;
var marker_houston = L.marker([29.63, -95.39], {
  draggable: true,
  title: "Houston Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker_houston.bindPopup("Hello Houston!");


// la;
var marker_LA = L.marker([34.05,-118.24], {
  draggable: true,
  title: "LA Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker_LA.bindPopup("Hello Los Angeles!");

// omaha;
var marker_omaha = L.marker([41.25, -95.99], {
  draggable: true,
  title: "Omaha Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker_omaha.bindPopup("Hello Omaha!");


