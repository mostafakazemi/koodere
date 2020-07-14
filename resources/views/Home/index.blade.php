<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/app.css">
    <script src='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.js'></script>
    <link href='https://api.cedarmaps.com/cedarmaps.js/v1.8.0/cedarmaps.css' rel='stylesheet'/>
    <script src='/dist/v1.8.0/auto-complete.js'></script>
    <script src='/dist/v1.8.0/L.Control.Locate.min.js'></script>
    <script src='/dist/v1.8.0/tiniAjax.js'></script>

    <script src='/dist/v1.8.0/leaflet.markercluster.js'></script>


    <link href='/dist/v1.8.0/auto-complete.css' rel='stylesheet'/>
    <link href='/dist/v1.8.0/L.Control.Locate.min.css' rel='stylesheet'/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <title>Document</title>
</head>
<body class="bg-light">

<div class="d-flex flex-column" style="min-width: 100%; min-height: 100%" id="app">
    <div class="fullscreen-loading">
        <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"/>
    </div>

    <div class="container px-0 flex-grow-1">
        <router-view name="header"></router-view>
        <router-view></router-view>
    </div>

    <v-footer></v-footer>
</div>

<script src="/js/app.js"></script>

{{--@include('sweet::alert')--}}

{{--@yield('script')--}}

</body>
</html>
