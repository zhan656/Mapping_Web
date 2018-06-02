// Creating map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoieHpoYW5nIiwiYSI6ImNqaHhoc2xzYzBienozcG1oY3U2cXgwbjQifQ.O_YXelbj-noVyqfLcyeItA").addTo(myMap);

// An array containing each city's name, location, and population
var cities = [
  {
    location: [40.7128, -74.0059],
    name: "New York",
    population: 8550405
  },
  {
    location: [41.8781, -87.6298],
    name: "Chicago",
    population: 2720546
  },
  {
    location: [29.7604, -95.3698],
    name: "Houston",
    population: 2296224
  },
  {
    location: [34.0522, -118.2437],
    name: "Los Angeles",
    population: 3971883
  },
  {
    location: [41.2524, -95.9980],
    name: "Omaha",
    population: 446599
  }
];

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(population) {
  return population / 40;
}

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population and add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.circle(city.location, {
  fillOpacity: 0.75,
  color: "white",
  fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
  radius: markerSize(city.population)}).bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
.addTo(myMap);}


