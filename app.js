var fut = new Date("feb 10, 2024 12:00:00 GMT+0700").getTime(); // Sửa thời gian bắt đầu

let x = setInterval(function stime() {
    var now = new Date().getTime() + 12 * 60 * 60 * 1000; // Cộng thêm 7 giờ để chuyển múi giờ về Việt Nam
    var D = fut - now;

    if (D < 0) {
        clearInterval(x);
        window.location.href = "intro.html";
    } else {
        var days = Math.floor(D / (1000 * 60 * 60 * 24));
        var hours = Math.floor((D % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((D % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((D % (1000 * 60)) / 1000);
        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}, 1000);
