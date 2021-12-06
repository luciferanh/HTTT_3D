
$.get("/store", function(data) {
    DatabaseDT= Object.values(data)[1];

    var mapObj = null;
    //--------------------------------Layer Map---------------------------------------------
    var     streets   = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { id: 'MapID', attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'});
        

    var defaultCoord = [10.869596, 106.803244]; // coord mặc định, UIT
    var zoomLevel = 16; // Mức phóng to bản đồ

    //---------------------------------------------------------------------------------------------------------------------

    //--------------------------------Marker ---------------------------------------------
    var fg = L.featureGroup();
    var array_duongtinh= [[10.869948, 106.796439],[10.874842, 106.798475]];
    var layers_array= [];
    if ( DatabaseDT.length==0) {
        console.log("Vẫn chưa connect sql");
        DatabaseDT=array_duongtinh;
    }
    for (let index = 0; index < DatabaseDT.length; index++) {
        
          const element = [DatabaseDT[index].x,DatabaseDT[index].y];
        var Duongtinh = element; // Toạ độ marker
        var option = {
            className: "map-popup-content",
        };
    // html cho popup
        var content = `<div class='left'>
                                <img src='https://upload.wikimedia.org/wikipedia/vi/2/28/Bloom.png' />
                            </div>
                            <div class='right'>
                                <b>Ca thứ xx</b><br>Dương tính `+index+`
                            </div>
                            <div class='clearfix'></div>`;

        var popup = L.popup(option);
        popup.setContent(content);
        var Icon = new L.Icon({
            iconUrl: 'img/icon/duongtinh.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        var marker = L.marker(Duongtinh,{
            icon: Icon}
        );
        marker.bindPopup(popup);
    
        layers_array.push(marker);
        
        // binding popup vào marker
        
        
    }
    //-----------------------------------------------------------------------------------------------------------
    var duongtinh = L.layerGroup(layers_array);
    var mapConfig = {
        attributionControl: true, // để ko hiện watermark nữa, nếu bị liên hệ đòi thì nhớ open nha
        center: defaultCoord, // vị trí map mặc định hiện tại
        zoom: zoomLevel,
        layers: [streets, duongtinh]
    };

    mapObj = L.map('map', mapConfig);

    // var baseMaps = {
    //     "Streets": streets
    // };

    var overlayMaps = {
    
        "<img src='img/icon/duongtinh.png' /><span class='my-layer-item'>Ca F0</span>":duongtinh

    }

    L.control.layers( [], overlayMaps,).addTo(mapObj);

    // // Add custom marker
    // var marker_coord = [10.869596, 106.803244]; // Toạ độ marker
  
    // // html cho popup
    // var popup_content = `<div class='left'>
    //                         <img src='https://img.pixers.pics/pho(s3:700/PI/23/27/700_PI2327_65c65c262917a837fe5b7240420e1ab4_5b7ab916358ae_.,700,700,jpg)/posters-hello-kitty.jpg.jpg' />
    //                     </div>
    //                     <div class='right'>
    //                         <b>Sudo - OpenStreetMap</b><br>Việt Anh đẹp trai
    //                     </div>
    //                     <div class='clearfix'></div>`;

    // var popup = L.popup(popup_option);
    // popup.setContent(popup_content);

    // var marker = L.marker(marker_coord).addTo(mapObj);
    // // binding popup vào marker
    // marker.bindPopup(popup);
   // add marker on click
   mapObj.on("click", addMarker);

    function addMarker(e) {
    // Add marker to map at click location
    const markerPlace = document.querySelector(".marker-position");
    markerPlace.textContent = `new marker: ${e.latlng.lat}, ${e.latlng.lng}`;

    const markerClick = new L.marker(e.latlng, {
        draggable: true
    })
        .addTo(mapObj)
        .bindPopup(buttonRemove);

    // event remove marker
    markerClick.on("popupopen", removeMarker);

    // event draged marker
    markerClick.on("dragend", dragedMaker);
    }

    const buttonRemove =
    '<button type="button" class="remove">Xóa địa chỉ 💔</button>';

    // remove marker
    function removeMarker() {
    const marker = this;
    const btn = document.querySelector(".remove");
    btn.addEventListener("click", function () {
        const markerPlace = document.querySelector(".marker-position");
        markerPlace.textContent = "goodbye marker 💩";
        mapObj.removeLayer(marker);
    });
    }

    // draged
    function dragedMaker() {
    const markerPlace = document.querySelector(".marker-position");
    markerPlace.textContent = `change position: ${this.getLatLng().lat}, ${
        this.getLatLng().lng
    }`;
    }


});
































