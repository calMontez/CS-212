/*
* This code is not gonna change from when it was incepted sometime back in 2021.
* I am however gonna write a ton of comments making fun of my 16-year-old self.
* */

var dName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// W unused variable
var pixelshiftable = document.getElementsByClassName("pixelshift");
var tOut;

// Not gonna explain how but these next two functions being separate is so stupid.

function checkDate() {
    const today = new Date(); // Proof that I know when to use const sometimes
    let dM = today.getMonth();
    let dD = today.getDate();
    dM = dName[dM];
    document.getElementById("date").innerHTML = dM + " " + dD;
}

function startTime() {
    const today = new Date(); // Again ?
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    if (h > 12) {
        h = h - 12;
        pm = " PM"
    } else {
        pm = " AM"
    }
    if (h < 10) {
        h = "0" + h
    }
    ;
    if (m < 10) {
        m = "0" + m
    }
    ;
    if (s < 10) {
        s = "0" + s
    }
    ;
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    setTimeout(checkDate, 1000);
}

function weatherBalloon(cityID) {
    var key = 'dfa5e9fcb66a23d5e2caa40e40ba698d'; // Here's my public API key in case anyone needs it. Should've at least been a const.
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {
        });
    setTimeout(weatherBalloon, 60000);
}

function drawWeather(d) {
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32); // Not a const here...
    document.getElementById('weather').innerHTML = fahrenheit + '&deg;F';
}

function updateMSG() {
    var obj = document.getElementById("MSGcontent").value // ...or here.
    if (obj != "") {
        obj = obj.replace(/\n\r?/g, '<br />');
        document.getElementById("message").innerHTML = obj
    } else {
        document.getElementById("message").innerHTML = "Press 'S' to open Settings."
    }
}

function setSchedule(a) {
    const today = new Date(); // Bro AGAIN !?
    var x = today.getDay() // No semicolon is baller
    /*
    Holy shit this is terrible :sob:
     */
    if (a == "auto") {
        if (x == 3) {
            document.getElementById("schedule").innerHTML = "A: 6:30-7:25<br>1: 7:30-8:09<br>2: 8:14-8:53<br>RST: 8:58-9:43<br>3: 9:48-10:27<br>4: 10:32-11:11<br>5: 11:16-11:54<br>6: 11:59-12:37<br>7: 12:42-1:20"
        } else {
            document.getElementById("schedule").innerHTML = "A: 6:30-7:25<br>1: 7:30-8:24<br>2: 8:29-9:23<br>3: 9:28-10:24<br>4: 10:29-11:23<br>5: 11:28-12:22<br>6: 12:27-1:21<br>7: 1:26-2:20"
        }
    } else if (a == "regular") {
        document.getElementById("schedule").innerHTML = "A: 6:30-7:25<br>1: 7:30-8:24<br>2: 8:29-9:23<br>3: 9:28-10:24<br>4: 10:29-11:23<br>5: 11:28-12:22<br>6: 12:27-1:21<br>7: 1:26-2:20"
    } else if (a == "half") {
        document.getElementById("schedule").innerHTML = "A: 6:30-7:25<br>1: 7:30-7:58<br>2: 8:03-8:31<br>3: 8:36-9:09<br>4: 9:14-9:42<br>5: 9:47-10:15<br>6: 10:20-10:48<br>7: 10:53-11:20"
    } else if (a == "rst") {
        document.getElementById("schedule").innerHTML = "A: 6:30-7:25<br>1: 7:30-8:09<br>2: 8:14-8:53<br>RST: 8:58-9:43<br>3: 9:48-10:27<br>4: 10:32-11:11<br>5: 11:16-11:54<br>6: 11:59-12:37<br>7: 12:42-1:20"
    } else if (a == "assembly") {
        document.getElementById("schedule").innerHTML = "A: 6:30-7:25<br>1: 7:30-8:18<br>2: 8:23-9:11<br>3A: 9:16-10:04<br>3B: 10:09-10:57<br>4: 11:02-11:45<br>5: 11:50-12:33<br>6: 12:38-1:26<br>7: 1:31-2:20"
    }
}

function openSettings(event) {
    var x = event.charCode; // I'm gonna stop pointing it out every time now.
    if (x == 115) {
        var y = document.getElementById("settings");
        if (y.style.display === "none") {
            $(y).show(); // Yoooo first usage of JQuery
        }
    }
}

function aScroll() {
    var checkBox = document.getElementById("autoScroll");
    var sSpeed = document.getElementById("message");
    var sSlider = document.getElementById("scrollSlider");
    if (checkBox.checked == true) {
        sSpeed.style.animation = "none"
        sSpeed.style.animation = "my-animation " + sSpeed.innerHTML.length * 0.07666098807 + "s linear infinite"
        sSlider.disabled = true;
    } else {
        sSpeed.style.animation = "none"
        sSpeed.style.animation = "my-animation " + sSlider.value + "s linear infinite"
        sSlider.disabled = false;
    }
}

/*
Jesus fucking christ...
 */

function pixelShift() {
    $(".pixelshift").animate({
        left: '+=3px'
    }, 600000);
    $(".pixelshift").animate({
        right: '+=3px'
    }, 600000);
    $(".pixelshift").animate({
        top: '+=3px'
    }, 600000);
    $(".pixelshift").animate({
        bottom: '+=3px'
    }, 600000);
    $(".pixelshift").animate({
        left: '-=3px'
    }, 600000);
    $(".pixelshift").animate({
        right: '-=3px'
    }, 600000);
    $(".pixelshift").animate({
        top: '-=3px'
    }, 600000);
    $(".pixelshift").animate({
        bottom: '-=3px'
    }, 600000);
    tOut = setTimeout(pixelShift, 4800020);
}

function updatePixelShift(obj) {
    obj = document.getElementById("OTRburnin")
    if ($(obj).is(":checked")) {
        pixelShift();
    } else {
        console.log("Trying to End...")
        clearTimeout(tOut);
    }
}

function colorChange(whatToChange, color) {
    if (whatToChange == "font") {
        $(".colorFont2").css("color", color)
    } else if (whatToChange == "bg") {
        $(".colorBG").css("background-color", color)
        $(".colorFont").css("color", color)
        $(".slider::-webkit-slider-thumb").css("background", color)
        $("body").get(0).style.setProperty("--colorForThumb", color)
    }
}