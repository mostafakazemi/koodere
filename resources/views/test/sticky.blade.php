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

<div>
    <div style="position: sticky; top: 0;">
        <h1>تیتر</h1>
        <h1>تیتر</h1>
        <h1>تیتر</h1>
    </div>
    <div>
        <ul>
        @for($i=0;$i<50;$i++)
            <li>{{ $i }}</li>
        @endfor
        </ul>
    </div>
</div>


</body>
</html>