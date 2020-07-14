<!DOCTYPE html>
<html>

<head>
    <meta charset=utf-8/>

    <title>add job</title>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="/css/app.css">
    <script src='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.js'></script>
    <link href='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.css' rel='stylesheet'/>

    <script src='/dist/v1.8.0/auto-complete.js'></script>
    <script src='/dist/v1.8.0/L.Control.Locate.min.js'></script>
    <script src='/dist/v1.8.0/tiniAjax.js'></script>

    <link href='/dist/v1.8.0/address-locator.css' rel='stylesheet'/>

    <!-- Third party libraries used in this demo -->
    <link href='/dist/v1.8.0/auto-complete.css' rel='stylesheet'/>
    <link href='/dist/v1.8.0/L.Control.Locate.min.css' rel='stylesheet'/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <style>
        .cedarmap #my-marker {
            position: absolute;
            z-index: 100;
            top: calc(50% - 41px);
            left: calc(50% - 12.5px);
        }

        .cedarmap input[type="search"] {
            z-index: 5000;
            position: absolute;
            top: 20px;
            right: 10px;
            width: 30%;
            min-width: 150px;
            direction: rtl;
        }
    </style>

</head>

<body>

<div>
    <div id='map' class="cedarmap" style="width: 760px; height: 500px;">
        <div class="">
            <form>
                <div class="form-group">
                    <input type="search" class="form-control">
                </div>
            </form>
        </div>
        <img src="http://api.cedarmaps.com/cedarmaps.js/v1.8.0/images/marker-icon.png" id="my-marker">
    </div>
</div>

<script>
    try {
        L.cedarmaps.accessToken = "{{ config('app.cedarmaps_access_token') }}";
    } catch (err) {
        throw new Error('You need to get an access token to be able to use cedarmaps SDK. ' +
            'Send us an email to <info@cedar.ir>');
    }


    var tileJSONUrl = 'https://api.cedarmaps.com/v1/tiles/cedarmaps.streets.json?access_token=' + L.cedarmaps.accessToken,
        marker,
        syntaxHighlight;

    // Initializing our map using some options
    var map = L.cedarmaps.map('map', tileJSONUrl, {
        scrollWheelZoom: true,
        maxZoom: 17,
        minZoom: 2,
    }).setView([33.63493454210291, 46.40716195106507], 5);

    L.control.locate({flyTo: true}).addTo(map);

    map.on('moveend', function (e) {
        console.log(map.getCenter().lat, +' ' + map.getCenter().lng);
    });
</script>
</body>

</html>