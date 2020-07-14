<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.js'></script>
    <link href='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.css' rel='stylesheet'/>
    <script src="/dist/v1.8.0/leaflet-omnivore.min.js"></script>
</head>
<body>

<div id='map' style='width: 600px; height: 400px;'></div>

<br>


<script type="text/javascript">
    try {
        L.cedarmaps.accessToken = "35c40726423c3725fdc6a3df4aa77fbda9aaa7c3";
    } catch (err) {
        throw new Error('You need to get an access token to be able to use cedarmaps SDK. ' +
            'Send us an email to <info@cedar.ir>');
    }

    var tileJSONUrl = 'https://api.cedarmaps.com/v1/tiles/cedarmaps.streets.json?access_token=' + L.cedarmaps.accessToken,
        marker;

    // initilizing map into div#map
    // and also activating a context menu for our maps
    var map = L.cedarmaps.map('map', tileJSONUrl, {
        scrollWheelZoom: true,
        zoomControl: false,
        minZoom: 7,
        maxZoom: 17,
        maxBounds: [[25.064, 44.039], [39.771, 63.322]],  // Iran's bounding box
        contextmenu: true,
        contextmenuWidth: 230,
        locateControl: true,
        contextmenuItems: [
            {
                text: 'موقعیت نقشه',
                callback: function (latlngObj, layerPoint, containerPoint) {
                    alert('You have clicked on: ' + latlngObj.latlng);
                }.bind(this)
            }
        ]
    }).setView([35.757448286487595, 51.40876293182373], 7);

    /**
     * Drawing our KML data
     */

        // We draw a sample route to map using a test kml file.
        // We use leaflet-omnivore plugin for parsing this format: https://github.com/mapbox/leaflet-omnivore
    var customLayer = L.geoJson(null, {

            // http://leafletjs.com/reference.html#geojson-style
            style: function (feature) {
                return {color: '#f00'};
            }
        });

    var runLayer = omnivore.kml('/dist/data/test-route.kml', null, customLayer)
        .on('ready', function () {
            map.fitBounds(runLayer.getBounds());
        })
        .addTo(map);

</script>

</body>
</html>