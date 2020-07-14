<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .delayedShow {
            width: 60px;
            height: 60px;

            background-color: #ff6699;

        }

        @keyframes delayedShow {
            to {
                visibility: visible;
            }
        }

        .delayedShow{
            visibility: hidden;
            animation: 0s linear 2.3s forwards delayedShow ;
        }
    </style>
</head>
<body>
<div class="delayedShow"></div>
</body>
</html>