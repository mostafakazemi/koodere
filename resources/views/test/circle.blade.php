<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>removeClass demo</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <style>
        .circle-container {
            position: relative;
            width: 24em;
            height: 24em;
            padding: 2.8em;
            /*2.8em = 2em*1.4 (2em = half the width of a link with img, 1.4 = sqrt(2))*/
            border: dashed 1px;
            border-radius: 50%;
            margin: 1.75em auto 0;
        }
        .circle-container a {
            display: block;
            position: absolute;
            top: 50%; left: 50%;
            width: 4em; height: 4em;
            margin: -2em;
        }
        .circle-container img { display: block; width: 100%; }
        .deg0 { transform: translate(12em); } /* 12em = half the width of the wrapper */
        .deg45 { transform: rotate(45deg) translate(12em) rotate(-45deg); }
        .deg135 { transform: rotate(135deg) translate(12em) rotate(-135deg); }
        .deg180 { transform: rotate(180deg) translate(12em) rotate(-180deg); }
        .deg225 { transform: rotate(225deg) translate(12em) rotate(-225deg); }
        .deg315 { transform: rotate(315deg) translate(12em) rotate(-315deg); }
    </style>
</head>
<body>

<div class='circle-container'>
    <a href='#' class='center'><img src='https://via.placeholder.com/130x130'></a>
    <a href='#' class='deg0'><img src='https://via.placeholder.com/120x120'></a>
    <a href='#' class='deg45'><img src='https://via.placeholder.com/120x120'></a>
    <a href='#' class='deg135'><img src='https://via.placeholder.com/120x120'></a>
    <a href='#' class='deg180'><img src='https://via.placeholder.com/120x120'></a>
    <a href='#' class='deg225'><img src='https://via.placeholder.com/120x120'></a>
    <a href='#' class='deg315'><img src='https://via.placeholder.com/120x120'></a>
</div>

</body>
</html>