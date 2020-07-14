<!DOCTYPE html>
<html>

<head>
    <script src='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.js'></script>
    <link href='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.css' rel='stylesheet'/>
    <script src='/dist/v1.8.0/auto-complete.js'></script>
    <script src='/dist/v1.8.0/L.Control.Locate.min.js'></script>
    <script src='/dist/v1.8.0/tiniAjax.js'></script>
    <link href='/dist/v1.8.0/address-locator.css' rel='stylesheet'/>
    <link href='/dist/v1.8.0/auto-complete.css' rel='stylesheet'/>
    <link href='/dist/v1.8.0/L.Control.Locate.min.css' rel='stylesheet'/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
</head>

<body>

<form action="">
    <div class="form-row">
        <div class="form-group w-100 col-md-10 col-lg-8">
            <label>آدرس روی نقشه</label>
            <input type="hidden" name="latitude" id="latitude" required>
            <input type="hidden" name="longitude" id="longitude" required>

            <div id="map" class="cedarmap rounded-1 mx-3" style="height: 400px">

                <img src="http://api.cedarmaps.com/cedarmaps.js/v1.8.0/images/marker-icon.png" id="my-marker">
            </div>
            <form id="form">
                <div class="form-group form-component">
                    <input type="search" id="streets" name="streets" class="form-control" placeholder="جستجو">
                </div>
            </form>

        </div>
    </div>
</form>

<script>
    try {
        L.cedarmaps.accessToken = "{{ config('app.cedarmaps_access_token') }}";
    } catch (err) {
        throw new Error('You need to get an access token to be able to use cedarmaps SDK. ' +
            'Send us an email to <info@cedar.ir>');
    }

    // Setting up our DOM elements and global scope variables.
    var form = document.getElementById('form'),
        streetsInput = document.getElementById('streets'),
        loading = document.getElementById('loading'),
        globalSearchBoundingBox = {sw: [33.5947, 46.3508], ne: [33.6527, 46.4531]}, // Bounding box of Ilam
        marker,
        rectagle;

    var tileJSONUrl = 'https://api.cedarmaps.com/v1/tiles/cedarmaps.streets.json?access_token=' + L.cedarmaps.accessToken;

    // Initializing our map using some options
    var map = L.cedarmaps.map('map', tileJSONUrl, {
        scrollWheelZoom: true,
        maxZoom: 17,
        minZoom: 6,
    }).setView([35.757552763570196, 51.41000747680664], 7);

    // Adding locate control to map
    L.control.locate({flyTo: true}).addTo(map);

    // We need to initialize our administrativeBoundaries and geocoding module.
    var locator = L.cedarmaps.administrativeBoundaries();
    var geocoder = L.cedarmaps.geocoder('cedarmaps.streets');


    var locationerror = function () {
        console.log('You either blocked browser from accessing your location OR there\'s something really wrong!');
    };

    map.on('locationerror ', locationerror);

    var selectLocality = function (selectedOption) {
        streetsInput.disabled = false;
        var value = selectedOption.value;

        if (!value) {
            sw = citiesList.options[citiesList.selectedIndex].getAttribute('data-sw').split(','),
                ne = citiesList.options[citiesList.selectedIndex].getAttribute('data-ne').split(',');
            globalSearchBoundingBox = {sw: sw, ne: ne};
            drawBoundary();
            map.flyToBounds([sw, ne]);

            return;
        }

        var sw = localitiesList.options[localitiesList.selectedIndex].getAttribute('data-sw').split(','),
            ne = localitiesList.options[localitiesList.selectedIndex].getAttribute('data-ne').split(',');

        map.flyToBounds([sw, ne]);
        globalSearchBoundingBox = {sw: sw, ne: ne};
        drawBoundary();
    };

    var setMarker = function (latLng, zoom) {
        // Flying to the center point in zoom 17
        map.flyTo(latLng, 17);
    };

    // Just a random third party autocomplete module. Nothing special about this. You can have your own autocomplete module
    // https://goodies.pixabay.com/javascript/auto-complete/demo.html
    var autoCompelete = new autoComplete({
        selector: 'input[name="streets"]',
        minChars: 2,
        cache: 0,  // set to 1 if you need caching and making less requests
        source: function (term, response) {
            // Since we wont have full control over ajax responses and caching problems may occure if we directly
            // use geocoder.query, we build the request URL instead and then we use it our custom auto complete module.
            // It's a workaround for not getting cached results in our list.
            var queryURL = geocoder.queryURL({
                query: term,
                ne: globalSearchBoundingBox.ne,
                sw: globalSearchBoundingBox.sw
            });

            // In this demo we use a tiny 3rd party library for AJAX requests as we don't use jQuery or other bulky libraries.
            // So feel free to replace it with your preferred one. jQuery syntax for example would be like: $.ajax()
            Tini.ajax({
                url: queryURL,
                type: 'GET',
                success: function (res) {
                    var json = JSON.parse(res);
                    // if (window.console) console.log(json);
                    if (typeof json != 'undefined') {
                        if (json.results) response(json.results);
                        //no results
                        else {
                        }
                    }
                }
            });
        },
        renderItem: function (item, search) {
            var img, label, addressParts = [];

            switch (item.type) {
                case 'street':
                    img = 'icon_street@2x.png'
                    label = 'خیابان'
                    break;
                case 'boulevard':
                    img = 'icon_boulevard@2x.png'
                    label = 'بلوار'
                    break;
                case 'roundabout':
                    img = 'icon_roundabout@2x.png'
                    label = 'میدان'
                    break;
                case 'locality':
                    img = 'icon_locality@2x.png'
                    label = 'محله'
                    break;
                case 'freeway':
                    img = 'icon_freeway@2x.png'
                    label = 'آزادراه'
                    break;
                case 'expressway':
                    img = 'icon_freeway@2x.png'
                    label = 'اتوبان'
                    break;
                case 'motorway':
                    label = 'اتوبان'
                    img = 'icon_motorway@2x.png'
                    break;
                case 'place':
                    label = 'مکان'
                    img = 'icon_place@2x.png'
                    break;
                case 'city':
                    label = 'شهر'
                    img = 'icon_place@2x.png'
                    break;
            }

            if (!item.address || item.address == '') {
                // if (item.components.province) addressParts.push(item.components.province);
                // if (item.components.city) addressParts.push(item.components.city);

                item.address = addressParts.join('، ');
            } else {
                if (item.components.province) addressParts.push(item.components.province);
                if (item.address) addressParts.push(item.address);

                item.address = addressParts.join('، ');
            }

            var altName = item.alt_name ? ' (' + item.alt_name + ')' : '';

            return '<div class="autocomplete-suggestion" data-name="' + item.name + '" data-center="' + item.location.center + '">\
                        <div class="address">' + item.name + altName + '<span>' + item.address + '</span></div>\
                        <div class="street-type">\
                            <img src="/dist/v1.8.0/images/' + img + '" alt="" width="20" height="20">\
                            <span>' + label + '</span>\
                        </div>\
                    </div>';
        },
        onSelect: function (e, term, item) {
            streetsInput.vlue = item.getAttribute('data-name');
            setMarker(item.getAttribute('data-center').split(','));
        }
    });

</script>
</body>

</html>