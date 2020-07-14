<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/dist/css/s.map.min.css">
    <link rel="stylesheet" href="/dist/css/fa/style.css">
    <style>
        html, body {
            font-size: 10px;
        }

        #map {
            width: 800px;
            height: 500px;
        }
    </style>
    <title>Document</title>
</head>
<body>

<div id="map"></div>

<script src="/dist/js/jquery-3.2.1.min.js"></script>
<script src="/dist/js/jquery.env.js"></script>
<script src="/dist/js/s.map.styles.js"></script>
<script src="/dist/js/s.map.min.js"></script>

<script>
    $(document).ready(function () {

        var map = $.sMap({
            before: function () {
                // console.log('Before');
            },
            after: function () {
                // console.log('After');
            },
            mode: 'development',
            element: '#map',
            boxZoom: true,
            minZoom: 6,
            maxZoom: 18,
            presets: {
                latlng: {
                    lat: 33.63463,
                    lng: 46.40707,
                },
                zoom: 15,
            }
        });

        $.sMap.layers.static.build({
            layers: {
                base: {
                    default: {
                        server: 'https://map.ir/shiveh',
                        layers: 'Shiveh:ShivehNOPOI',
                        format: 'image/png',
                    },
                },
            },
        });


        $.sMap.editor.implement();

        var points = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        title: 'Test2',
                        description: 'Desc2',
                        icon: 'dist/assets/images/marker-default-blue.svg',
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [46.40707, 33.63463]
                    }
                }
            ]
        };

        points = $.sMap.editor.points.start({
            geoJson: points,
            modules: {
                create: true,
                drag: true,
                delete: true,
                get: true,
                editText: true,
                editIcon: true,
            },
            on: {
                click: function (feature) {
                    console.log('click');
                    console.log(feature);
                },
                contextmenu: function (feature) {
                    console.log('contextmenu');
                    console.log(feature);
                },
                change: function () {
                    console.log($.sMap.editor.points.all());
                },
                create: function (point) {
                    console.log('create:');
                    console.log(point);
                },
                drag: function (point) {
                    console.log('drag:');
                    console.log(point.geometry.coordinates[0]);
                    console.log(point.geometry.coordinates[1]);
                },
                delete: function (point) {
                    console.log('delete:');
                    console.log(point);
                },
                get: function (point) {
                    console.log('get:');
                    console.log(point);
                },
                editText: function (point) {
                    console.log('editText:');
                    console.log(point);
                },
                editIcon: function (point) {
                    console.log('editIcon:');
                    console.log(point);
                },
            },
            icons: [
                {
                    title: 'Blue',
                    class: 'marker-blue',
                    url: 'dist/assets/images/marker-default-blue.svg',
                }
            ],
        });


        // console.log($.sMap.editor.points.all());
        // console.log(points[0]['geometry']['coordinates']);

        // points[0]['geometry']['coordinates'][0] = '24';



    });

</script>
</body>
</html>