<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/app.css">
    <title>Document</title>

</head>

<body>
<div class="container">
    <div class="col-md-2 my-5">
        <div class="ui-widget">
            <label for="tags">Tags: </label>
            <input id="tags">
        </div>
    </div>
</div>

<script src="/js/app.js"></script>

<script>
    $(document).ready(function () {
        var availableTags = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ];
        $("#tags").autocomplete({
            source: availableTags
        });
    })
</script>

</body>
</html>