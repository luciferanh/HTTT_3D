//Dữ liệu vùng phong tỏa
var uitData = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"01","properties":{"name":"Làng Đại Học","f0":5},
    "geometry":{"type":"Polygon","coordinates":[[[10.873121519134497, 106.76519923502337],
    [10.867755018746509, 106.78187370300294],[10.86696830050258, 106.78991662007813],
    [10.866125383959735, 106.79283464470265],[10.866125383959735, 106.79283464470265],
    [10.868654126446355, 106.8050479888916],[10.895766516859064, 106.82564811594017],
    [10.897564557967604, 106.82807933437194],[10.898379290522715, 106.82058448497408],
    [10.901076323145464, 106.81660652669402],[10.904672327750902, 106.80576550066722],
    [10.912594623849552, 106.79701142679365],[10.89295705636543, 106.79048878351531],
    [10.890512804916229, 106.78568262531023],[10.889332814277418, 106.77890250927089],
    [10.884444231832436, 106.77169327196326],[10.878712688207626, 106.76688711375813]]]}},

    {"type":"Feature","id":"02","properties":{"name":"Làng Đại Học","f0":10},
    "geometry":{"type":"Polygon","coordinates":[[[10.890653281395627, 106.78469431433004],
    [10.890906135804956, 106.7873548661936],[10.892844679143277, 106.79035871507178],
    [10.906442222009801, 106.79463586970685],[10.910220767355291, 106.78273475558898],
    [10.91148495410367, 106.78118991902308],[10.905079685860615, 106.78118991902308],
    [10.903436206633991, 106.78033167648641],[10.89993851548903, 106.78050332499375],
    [10.898056205992804, 106.78191942517918],[10.897213377369932, 106.78376464663296],
    [10.893392523487979, 106.78413654998606]]]}},
]};


// //Hiển thi vùng phong tỏa
// var mapboxAccessToken = '<your access token here>';
// var map = L.map('map').setView([37.8, -96], 4);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
//     id: 'mapbox/light-v9',
//     attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     tileSize: 512,
//     zoomOffset: -1
// }).addTo(map);

// L.geoJson(uitData).addTo(map);

// //Chỉnh màu sắc khu vực hiển thị
// function getColor(d) {
//     return d > 20  ? '#800026' :
//            d > 10  ? '#BD0026' :
//            d > 5   ? '#E31A1C' :
//            d > 4   ? '#FC4E2A' :
//            d > 3   ? '#FD8D3C' :
//            d > 2   ? '#FEB24C' :
//            d > 1   ? '#FED976' :
//                      '#FFEDA0';
// }

// function style(feature) {
//     return {
//         fillColor: getColor(feature.properties.density),
//         weight: 2,
//         opacity: 1,
//         color: 'white',
//         dashArray: '3',
//         fillOpacity: 0.7
//     };
// }

// L.geoJson(statesData, {style: style}).addTo(map);

// //Tương tác 
// function highlightFeature(e) {
//     var layer = e.target;

//     layer.setStyle({
//         weight: 5,
//         color: '#666',
//         dashArray: '',
//         fillOpacity: 0.7
//     });

//     if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//         layer.bringToFront();
//     }
// }