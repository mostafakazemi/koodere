<!DOCTYPE html>
<html>
<head>
    <style>
        .slideUp {
            animation-name: slideUp;
            -webkit-animation-name: slideUp;
            animation-duration: 1s;
            -webkit-animation-duration: 1s;
            visibility: visible;
        }

        @keyframes slideUp {
            0% {
                opacity: 0;
                -webkit-transform: translateY(70%);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0%);
            }
        }

        @-webkit-keyframes slideUp {
            0% {
                opacity: 0;
                -webkit-transform: translateY(70%);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0%);
            }
        }

        body {height:1500px;}
        .col-1 {float:left}
        .col-2 {float:left;padding-left:25px;}
        img {width:180px;height:100px;visibility:hidden;}
        hr {margin-top:400px;}
    </style>
</head>
<body>

<p>Scroll down this page.</p>
<p>When you have scrolled 350px from the top, an image will slide in.</p>

<hr>
<div class="col-1">
    <img id="myImg" src="https://www.w3schools.com/jsref/img_pulpit.jpg" width="304" height="228">
</div>

<div class="col-2">
    Just some text..
</div>

<script>
    window.onscroll = function() {myFunction()};

    function myFunction() {console.log("run myFunction")
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            document.getElementById("myImg").className = "slideUp";
        }
    }
</script>

</body>
</html>
