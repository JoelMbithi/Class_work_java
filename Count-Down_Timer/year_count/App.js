const days = document.querySelectorAll(".days");
const hours = document.querySelectorAll(".hours");
const minutes = document.querySelectorAll(".minutes");
const seconds = document.querySelectorAll(".seconds");


const currentYear = new Date().getFullYear();

const newYearTime = new Date(`June 1 ${currentYear + 1} 00:00:00`);


//uupdate countdown

function updateCountDownTIme() {
    const currentYear = new Date();
    const diff = newYearTime - currentYear;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.forEach(day => {
        day.innerHTML = d;
    })

    hours.forEach(hour => {
        hour.innerHTML = h < 10 ? '0' + h : h;
    })
    minutes.forEach(minute => {
        minute.innerHTML = m < 10 ? '0' + m : m;
    })

    seconds.forEach(second => {
        second.innerHTML = s;
    })
}

setInterval(updateCountDownTIme, 1000);