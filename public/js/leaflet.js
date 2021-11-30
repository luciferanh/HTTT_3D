
        var mapObj = null;
        var defaultCoord = [10.869596, 106.803244]; // coord mặc định, UIT
        var zoomLevel = 16; // Mức phóng to bản đồ
        var mapConfig = {
            attributionControl: false, // để ko hiện watermark nữa, nếu bị liên hệ đòi thì nhớ open nha
            center: defaultCoord, // vị trí map mặc định hiện tại
            zoom: zoomLevel,
        };

        mapObj = L.map('map', mapConfig);

        // thêm tile để map có thể hoạt động, xài free từ OSM
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapObj);

        // Add custom marker
        var marker_coord = [10.869596, 106.803244]; // Toạ độ marker
        var popup_option = {
            className: "map-popup-content",
        };
        // html cho popup
        var popup_content = `<div class='left'>
                                <img src='https://img.pixers.pics/pho(s3:700/PI/23/27/700_PI2327_65c65c262917a837fe5b7240420e1ab4_5b7ab916358ae_.,700,700,jpg)/posters-hello-kitty.jpg.jpg' />
                            </div>
                            <div class='right'>
                                <b>Sudo - OpenStreetMap</b><br>Việt Anh đẹp trai
                            </div>
                            <div class='clearfix'></div>`;

        var popup = L.popup(popup_option);
        popup.setContent(popup_content);

        var marker = L.marker(marker_coord).addTo(mapObj);
        // binding popup vào marker
        marker.bindPopup(popup);
 function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

mapObj.on('click', onMapClick);

