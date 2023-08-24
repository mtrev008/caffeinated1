<!--TEST-->
<script>
      var rectangle1 = document.getElementById("rectangle1");
      if (rectangle1) {
        rectangle1.addEventListener("click", function (e) {
        });
      }
</script>

<template>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <link rel="stylesheet" href="styles/global.css" />
    <link rel="stylesheet" href="styles/index.css" />
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap" />
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lalezar:wght@400&display=swap" />
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" />

<body>
    <div class="landing-high">
        <div class="rectangle-parent">
            <div class="group-child"></div>
            <div class="register">Register</div>
        </div>
        <img class="caffeinated-3-1"
             alt="main picture"
             src="images/mainpic.png" />

        <div class="caffeinated">CAFFEINATED</div>
        <div class="lets-get-caffeinated">Let’s get caffeinated.</div>
        <div class="find-coffee">
            <div class="find-coffee-child" id="rectangle1"></div>
            <div class="find-coffee1">Find coffee!</div>
            <img class="vector-icon" 
                 alt="search" 
                 src="images/search.png" />
        </div>
        <div class="locations">Locations</div>
        <div class="about-us">About Us</div>
        <div class="landing-high-child"></div>
        <img class="caffeinated-2-1"
             alt="logo"
             src="images/logo.png" />

        <img class="icon" alt="logo" src="images/coffeebeans.png" />
    </div>

</body>
</template>
