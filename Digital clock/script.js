const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const time = document.getElementById("time");

function updateTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let t = "AM";

    if(h > 12) {
        h = h - 12;
        t = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    time.innerText = t;
    setTimeout(() => {
        updateTime();
    }, 1000);
}

updateTime();