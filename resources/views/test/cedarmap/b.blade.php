<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.css' rel='stylesheet' />
    <style>
        #map_ddmw05 {
            position: relative;
            width: 600px;
            height: 400px;
            max-width: 100%;
        }
    </style>
</head>
<body>

<div id="map_ddmw05"></div>

<script>
    function contactMap() {
        // Map options
        var cm_options = {"center":{"lat":33.64261628166113,"lng":46.40870690345765},"maptype":"light","scrollWheelZoom":false,"zoomControl":true,"zoom":17,"minZoom":6,"maxZoom":17,"legendControl":false,"attributionControl":false}
        // Initialized CedarMap
        var map = window.L.cedarmaps.map('map_ddmw05', 'https://api.cedarmaps.com/v1/tiles/cedarmaps.streets.json?access_token=35c40726423c3725fdc6a3df4aa77fbda9aaa7c3', cm_options);
        // Markers options
        var markers = [{"popupContent":"موقعیت مکانی شما","center":{"lat":33.6427502,"lng":46.4087436},"iconOpts":{"iconUrl":"https://api.cedarmaps.com/v1/markers/marker-default.png","iconRetinaUrl":"https://api.cedarmaps.com/v1/markers/marker-default@2x.png","iconSize":[82,98]}}];
        var markersLeaflet = [];
        var _marker = null;

        map.setView(cm_options.center, cm_options.zoom);
        // Add Markers on Map
        if (markers.length === 0) return;
        markers.map(function(marker) {
            var iconOpts = {
                iconUrl: marker.iconOpts.iconUrl,
                iconRetinaUrl: marker.iconOpts.iconRetinaUrl,
                iconSize: marker.iconOpts.iconSize,
                popupAnchor: [0, -49]
            };

            const markerIcon = {
                icon: window.L.icon(iconOpts)
            };

            _marker = new window.L.marker(marker.center, markerIcon);
            markersLeaflet.push(_marker);
            if (marker.popupContent) {
                _marker.bindPopup(marker.popupContent);
            }
            _marker.addTo(map);
        });
        // Bounding Map to Markers
        if (markers.length > 1) {
            var group = new window.L.featureGroup(markersLeaflet);
            map.fitBounds(group.getBounds(), { padding: [30, 30] });
        }
    };

    (function(c,e,d,a){
        var p = c.createElement(e);
        p.async = 1; p.src = d;
        p.onload = a;
        c.body.appendChild(p);
    })(document, 'script', 'https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.js', contactMap);
</script>

</body>
</html>