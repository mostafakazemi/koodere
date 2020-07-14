
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="site-title"></title>

    <link rel="stylesheet" href="/dist/css/s.map.min.css">
    <link rel="stylesheet" href="/dist/css/fa/style.css">

    <style>

        html, body {
            font-size: 10px;
        }

        #map {
            width: 600px;
            height: 400px;
        }
    </style>
</head>

<body>
<div id="map"></div>

<script src="/dist/js/jquery-3.2.1.min.js"></script>
<script src="/dist/js/jquery.env.js"></script>
<script src="/dist/js/s.map.styles.js"></script>
<script src="/dist/js/s.map.min.js"></script>

<script>
    $(document).ready(function() {

        var map = $.sMap({
            element: '#map',
            presets: {
                latlng: {
                    lat: 35.70,
                    lng: 51.47,
                },
                zoom: 5,
            },
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

        $.sMap.features();

        $.sMap.features.marker.create({
            name: 'test-marker',
            popup: {
                title: {
                    html: 'Title',
                    i18n: '',
                },
                description: {
                    html: 'Description',
                    i18n: '',
                },
            },
            latlng: {
                lat: 37.4,
                lng: 49.7,
            },
            popupOpen: true,
        });

    })
</script>
</body>

</html>
