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

    var nb = L.cedarmaps.nearby('map', [35.737334, 51.355215], {
        categories: ['bus', 'park', 'shopping', 'hospital', 'school'],
        searchDistance: 1,
        popupContent: '<h2>html is allowed here</h2>',
        defaultZoom: 20
    });
    setTimeout(function() {
        nb.updateCategories(['bus', 'park', 'shopping'])
        nb.centerMarker.setLatLng({lat: 35.738934, lon: 51.356315})
        nb.updateSearchDistance(80)
        nb.map.setView({lat: 35.738934, lon: 51.356315})
    }, 5000)

</script>

</body>
</html>