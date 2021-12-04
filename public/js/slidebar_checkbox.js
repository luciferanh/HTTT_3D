
function CheckDuongtinh(){
// Test ca dương tính 
    var Duongtinh1 = [10.869948, 106.796439]; // Toạ độ marker
    var Duongtinh1_option = {
        className: "map-popup-content",
    };
    // html cho popup
        var Duongtinh1_content = `<div class='left'>
                                <img src='https://upload.wikimedia.org/wikipedia/vi/2/28/Bloom.png' />
                            </div>
                            <div class='right'>
                                <b>Ca thứ xx</b><br>Dương tính 1
                            </div>
                            <div class='clearfix'></div>`;

        var popup1 = L.popup(Duongtinh1_option);
        popup1.setContent(Duongtinh1_content);
        var greenIcon = new L.Icon({
            iconUrl: 'img/icon/duongtinh.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        var Duongtinh2 = [10.874842, 106.798475]; // Toạ độ marker
        var Duongtinh2_option = {
            className: "map-popup-content",
        };
        // html cho popup
            var Duongtinh2_content = `<div class='left'>
                                    <img src='https://upload.wikimedia.org/wikipedia/vi/2/28/Bloom.png' />
                                </div>
                                <div class='right'>
                                    <b>Ca thứ xx</b><br>Dương tính 2
                                </div>
                                <div class='clearfix'></div>`;
        
            var popup2 = L.popup(Duongtinh2_option);
            popup2.setContent(Duongtinh2_content);
            var greenIcon = new L.Icon({
                iconUrl: 'img/icon/duongtinh.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
            var marker1 = L.marker(Duongtinh1,{
                icon: greenIcon}
            );
            var marker2 = L.marker(Duongtinh2,{
                icon: greenIcon}
            )
    if ($('#toggle').is(":checked")) {
        console.log("123");
        marker1.addTo(mapObj);
        // binding popup vào marker
        marker1.bindPopup(popup1);
        marker2.addTo(mapObj);
        // binding popup vào marker
        marker2.bindPopup(popup2);
    } else {
        mapObj.eachLayer(function(layer) {
            if (layer instanceof L.MarkerClusterGroup)
            {
                map.removeLayer(layer)
            }
        })
        
        
    }
}