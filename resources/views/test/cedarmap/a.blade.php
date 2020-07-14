<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.css' rel='stylesheet'/>
    <style>
        #map_3wgsm2 {
            position: relative;
            width: 600px;
            height: 400px;
            max-width: 100%;
        }
    </style>
</head>
<body>

<div id="map_3wgsm2"></div>

<script>
    function nearby() {
        // Initialized CedarMap
        L.cedarmaps.accessToken = '35c40726423c3725fdc6a3df4aa77fbda9aaa7c3';
        // Nearby options
        var nb = window.L.cedarmaps.nearby('map_3wgsm2', [35.711504, 51.407477], {
            centerMarkerIcon: window.L.icon({"slug":"","iconUrl":"https://api.cedarmaps.com/v1/markers/marker-default.png","iconRetinaUrl":"https://api.cedarmaps.com/v1/markers/marker-default@2x.png","iconSize":[82,98]}),
            categories: ["bus","park","shopping","hospital","school"],
            searchDistance: 5,
            defaultZoom: 15
        });
    };

    (function(c,e,d,a){
        var p = c.createElement(e);
        p.async = 1; p.src = d;
        p.onload = a;
        c.body.appendChild(p);
    })(document, 'script', 'https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.js', nearby);
</script>

</body>
</html>