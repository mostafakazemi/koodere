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

    var myIcon = L.icon({
        iconUrl: '../dist/v1.8.0/images/pin-taxi.png',
        iconRetinaUrl: '../dist/v1.8.0/images/pin-taxi@2x.png',
        iconSize: [34, 46],
        iconAnchor: [17, 41],
        popupAnchor: [-3, -46],
        shadowUrl: '../dist/v1.8.0/images/pin-shadow.png',
        shadowRetinaUrl: '../dist/v1.8.0/images/pin-shadow@2x.png',
        shadowSize: [26, 6],
        shadowAnchor: [13, 3]
    });
    var marker = new L.marker([35.757552763570196, 51.41000747680664], {
        icon: myIcon
    }).addTo(map);

    var popupOptions = {
        offset: new L.Point(2, 14),
        closeButton: true,
        autoPan: true
    };
    marker.bindPopup('Hello World!', popupOptions).openPopup();

</script>

</body>
</html>