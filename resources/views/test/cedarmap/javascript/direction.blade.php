<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.js'></script>
    <link href='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.css' rel='stylesheet' />
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

    // Initializing our map
    var map = L.cedarmaps.map('map', tileJSONUrl, {
        scrollWheelZoom: true,
        maxZoom: 17
    }).addControl(L.cedarmaps.geocoderControl('cedarmaps.streets', {
        keepOpen: true,
        autocomplete: true
    })).setView([35.757552763570196, 51.41000747680664], 15);

    /**
     * Initilizing Direction
     */
    var direction = L.cedarmaps.direction();

    // Points should be separated by a semicolon. e.g.: lat,lng;lat,lng;lat,lng....
    // You can provide up to 100 stops (including start, middle and end points) for a direction request. Here we provided 3.
    direction.route('cedarmaps.driving', '35.764335,51.365622;35.7604311,51.3939486;35.7474946,51.2429727', function(err, json) {
        var RouteGeometry = json.result.routes[0].geometry;

        var RouteLayer = L.geoJSON(RouteGeometry, {
            // for more styling options check out: https://leafletjs.com/reference-1.3.0.html#path-option
            style: function(feature) {
                return {
                    color: '#f00',
                    weight: 5
                }
            }
        }).addTo(map);

        map.fitBounds(RouteLayer.getBounds());
    });
</script>

</body>
</html>