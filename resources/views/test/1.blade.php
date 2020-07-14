<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>removeClass demo</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <style>
        div {
            width: 200px;
            height: 200px;
            /*background-color: #343a40;*/
        }

        .bg-dark {
            background-color: #343a40 !important;
        }

        .big-blue {
            width: 200px;
            height: 200px;
            background-color: #00f  !important;
        }

        .bg-light {
            width: 200px;
            height: 200px;
            background-color: #f8f9fa;
        }
    </style>
    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>

<div class="bg-light"></div>

<script>
    $( "div" ).click(function() {
        $( this ).removeClass( "bg-light", 1000, "easeInBack" ).addClass( "bg-dark", 1000, "easeInBack" );
    });
</script>

</body>
</html>