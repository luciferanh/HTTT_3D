var mymap = L.map('map').setView([21.0819, 105.6363],50);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoidmlldGFuaDIzOSIsImEiOiJja3dnMjBmY2kwa2xpMnZxdnplMHcwb3FhIn0.fP74UEmHDWFWoPJVvSmNxg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 500,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
var marker = L.marker([51.5, -0.09]).addTo(mymap);
var marker1 = L.marker([52, -0.08]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker1.bindPopup("<b>Hello world!</b><br> Việt Anh .").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);