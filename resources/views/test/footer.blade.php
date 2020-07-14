<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/app.css">
    <title>Document</title>
    <style>
    </style>
</head>

<body class="d-flex flex-column">

<div class="container px-0 flex-grow-1 bg-danger">
    @include('layout.header')

    @include('layout.errors')

    @yield('content')
</div>

@include('layout.footer')


</body>
</html>