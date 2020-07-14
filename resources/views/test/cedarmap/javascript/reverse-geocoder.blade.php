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
    <script src="/dist/v1.8.0/L.Control.Locate.min.js"></script>
</head>
<body>

<div id='map' style='width: 600px; height: 400px;'></div>
<div id="results">
    <h2 style="text-align: center;">Click somewhere on the map!</h2><div id="loading"><img src="../dist/v1.8.0/images/loading-14-blue.gif" width="14" height="14"> Loading...</div>
    <div id="latlng"></div>
    <div id="parsed-response"></div>
    <div id="raw-response"></div>
</div>

<br>

<script type="text/javascript">
    try {
        L.cedarmaps.accessToken = "35c40726423c3725fdc6a3df4aa77fbda9aaa7c3";
    } catch (err) {
        throw new Error('You need to get an access token to be able to use cedarmaps SDK. ' +
            'Send us an email to <info@cedar.ir>');
    }

    var tileJSONUrl = 'https://api.cedarmaps.com/v1/tiles/cedarmaps.streets.json?access_token='+ L.cedarmaps.accessToken,
        marker,
        syntaxHighlight;

    // Initializing our map
    var map = L.cedarmaps.map('map', tileJSONUrl, {
        scrollWheelZoom: true
    }).setView([33.63493454210291, 46.40716195106507], 14);

    // Setting up our DOM elements.
    var resultsContainer = document.getElementById('results'),
        latLngContainer = document.getElementById('latlng'),
        parsedResponseContainer = document.getElementById('parsed-response'),
        rawResponseContainer = document.getElementById('raw-response'),
        loadingIndicator = document.getElementById('loading');

    // We need to introduce our index to geocoder module. "cedarmaps.streets" in this case.
    var geocoder = L.cedarmaps.geocoder('cedarmaps.streets');

    map.on('click', function(e){
        if (marker) map.removeLayer(marker);
        marker = new L.marker(e.latlng).addTo(map);

        loading.style.visibility = 'visible';
        latLngContainer.innerHTML =  'LatLng: ' + e.latlng.lat + ', ' + e.latlng.lng;

        geocoder.reverseQuery(e.latlng, function callback(err, res){
            loading.style.visibility = 'hidden';
            parsedResponseContainer.style.display = 'block';
            rawResponseContainer.style.display = 'block';

            var parsedResponse = '<ul>'+
                '<li><strong>استان:</strong> ' + res.result.province + '</li>' +
                '<li><strong>شهر:</strong> ' + res.result.city + '</li>' +
                '<li><strong>محله:</strong> ' + res.result.locality + '</li>' +
                '<li><strong>خیابان:</strong> ' + res.result.address + '</li>' +
                '<li><strong>در منطقه طرح ترافیک:</strong> ' + (res.result.traffic_zone.in_central ? 'بله' : 'خیر' ) + '</li>' +
                '<li><strong>در منطقه زوج و فرد:</strong> ' + (res.result.traffic_zone.in_evenodd ? 'بله' : 'خیر' ) + '</li>' +
                '</ul>';
            var rawResponse = '<pre class="language-javascript">'+ syntaxHighlight(JSON.stringify(res, undefined, 2)) + '</pre>'

            parsedResponseContainer.innerHTML = parsedResponse;
            rawResponseContainer.innerHTML = rawResponse;

        });
    });

    syntaxHighlight = function(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

</script>

</body>
</html>