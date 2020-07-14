<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="/dist/js/jquery-3.2.1.min.js"></script>
    <script src='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.js'></script>
    <link href='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.css' rel='stylesheet' />
    <script src="/dist/v1.8.0/leaflet.markercluster.js"></script>
</head>
<body>

<div id='map' style='width: 600px; height: 400px;'></div>

<script type="text/javascript">
    try {
        L.cedarmaps.accessToken = "35c40726423c3725fdc6a3df4aa77fbda9aaa7c3";
    } catch (err) {
        throw new Error('You need to get an access token to be able to use cedarmaps SDK. ' +
            'Send us an email to <info@cedar.ir>');
    }
    // Getting maps info from a tileJSON source
    var tileJSONUrl = 'https://api.cedarmaps.com/v1/tiles/cedarmaps.streets.json?access_token=' + L.cedarmaps.accessToken;

    // initilizing map into div#map
    var map = L.cedarmaps.map('map', tileJSONUrl, {
        scrollWheelZoom: true
    }).setView([35.757448286487595, 51.40876293182373], 15);

    // These are some random points in Iran, which we are going to make a cluster out of them. Each point has coordinates and
    // a random popup content which is simply an incremental number. If you later click on any marker, a popup shows with that
    // number.
    var addressPoints = [{"lat":35.55904339525896,"lng":51.36108398437501,"popupContent":"1"},{"lat":35.62158189955968,"lng":51.55883789062501,"popupContent":"2"},{"lat":35.45172093634465,"lng":51.67968750000001,"popupContent":"3"},{"lat":35.47856499535729,"lng":51.32812500000001,"popupContent":"4"},{"lat":35.68407153314097,"lng":51.19628906250001,"popupContent":"5"},{"lat":35.69299463209881,"lng":51.427001953125,"popupContent":"6"},{"lat":35.576916524038616,"lng":51.36108398437501,"popupContent":"7"},{"lat":35.576916524038616,"lng":51.19628906250001,"popupContent":"8"},{"lat":35.63051198300061,"lng":51.22924804687501,"popupContent":"9"},{"lat":35.66622234103479,"lng":51.35009765625001,"popupContent":"10"},{"lat":35.7019167328534,"lng":51.448974609375,"popupContent":"11"},{"lat":35.71975793933433,"lng":51.54785156250001,"popupContent":"12"},{"lat":35.65729624809628,"lng":51.51489257812501,"popupContent":"13"},{"lat":35.60371874069731,"lng":51.427001953125,"popupContent":"14"},{"lat":35.65729624809628,"lng":51.30615234375001,"popupContent":"15"},{"lat":35.594785665487244,"lng":51.097412109375,"popupContent":"16"},{"lat":36.27970720524017,"lng":59.57885742187501,"popupContent":"17"},{"lat":36.20882309283712,"lng":59.76562500000001,"popupContent":"18"},{"lat":36.27085020723905,"lng":59.76562500000001,"popupContent":"19"},{"lat":36.24427318493909,"lng":59.710693359375,"popupContent":"20"},{"lat":36.1822249804225,"lng":59.69970703125,"popupContent":"21"},{"lat":36.1822249804225,"lng":59.710693359375,"popupContent":"22"},{"lat":36.30627216957992,"lng":59.73266601562501,"popupContent":"23"},{"lat":36.20882309283712,"lng":59.68872070312501,"popupContent":"24"},{"lat":36.217687122250574,"lng":59.62280273437501,"popupContent":"25"},{"lat":36.15561783381855,"lng":59.68872070312501,"popupContent":"26"},{"lat":32.602361666817515,"lng":51.64672851562501,"popupContent":"27"},{"lat":32.62087018318113,"lng":51.66870117187501,"popupContent":"28"},{"lat":32.65325087996883,"lng":51.70715332031251,"popupContent":"29"},{"lat":32.648625783736726,"lng":51.66870117187501,"popupContent":"30"},{"lat":32.704111144407406,"lng":51.61376953125001,"popupContent":"31"},{"lat":32.690243035492266,"lng":51.50390625000001,"popupContent":"32"},{"lat":32.63474905974431,"lng":51.5972900390625,"popupContent":"33"},{"lat":32.59310597426537,"lng":51.55883789062501,"popupContent":"34"},{"lat":32.588477769459146,"lng":51.712646484375,"popupContent":"35"},{"lat":32.532920675187846,"lng":51.67968750000001,"popupContent":"36"},{"lat":29.599730094380433,"lng":52.54211425781251,"popupContent":"37"},{"lat":29.585400203408376,"lng":52.54211425781251,"popupContent":"38"},{"lat":29.544787796199465,"lng":52.60253906250001,"popupContent":"39"},{"lat":29.585400203408376,"lng":52.54211425781251,"popupContent":"40"},{"lat":29.594953690210986,"lng":52.49267578125001,"popupContent":"41"},{"lat":29.573457073017593,"lng":52.5091552734375,"popupContent":"42"},{"lat":29.530450107491063,"lng":52.53936767578126,"popupContent":"43"},{"lat":29.5830116903775,"lng":52.57507324218751,"popupContent":"44"},{"lat":29.614057949691468,"lng":52.52563476562501,"popupContent":"45"},{"lat":29.573457073017593,"lng":52.50640869140626,"popupContent":"46"},{"lat":29.566290516578164,"lng":52.58056640625001,"popupContent":"47"},{"lat":29.59017705987947,"lng":52.55584716796876,"popupContent":"48"},{"lat":29.591371238663804,"lng":52.540740966796875,"popupContent":"49"},{"lat":29.56270704764342,"lng":52.53936767578126,"popupContent":"50"},{"lat":29.581817412664478,"lng":52.518768310546875,"popupContent":"51"},{"lat":29.6200272884574,"lng":52.5091552734375,"popupContent":"52"},{"lat":29.62360872200976,"lng":52.4871826171875,"popupContent":"53"},{"lat":29.602118211647333,"lng":52.49404907226563,"popupContent":"54"},{"lat":29.594953690210986,"lng":52.54348754882813,"popupContent":"55"},{"lat":29.621221113784504,"lng":52.56134033203125,"popupContent":"56"},{"lat":29.560317997724837,"lng":52.60253906250001,"popupContent":"57"}];


    // This example makes use of a leaflet plugin.
    // For more information on how to use other features of this plugin, please read its docs:
    // https://github.com/Leaflet/Leaflet.markercluster#using-the-plugin

    var markers = L.markerClusterGroup();

    for (var i = 0; i < addressPoints.length; i++) {
        var point = addressPoints[i];
        var popupContent = point["popupContent"];
        var marker = L.marker(new L.LatLng(point["lat"], point["lng"]), { title: popupContent });
        marker.bindPopup(popupContent);
        markers.addLayer(marker);
    }

    map.addLayer(markers);

</script>

</body>
</html>