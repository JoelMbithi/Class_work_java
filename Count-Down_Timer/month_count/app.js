const days = document.querySelectorAll(".days");
const hours = document.querySelectorAll(".hours");
const minutes = document.querySelectorAll(".minutes");
const seconds = document.querySelectorAll(".seconds");

const currentMonth = new Date().getMonth();
let nextMonth;
if (currentMonth === 5) { // If current month is December
    nextMonth = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0); // January of next year
} else {
    nextMonth = new Date(new Date().getFullYear(), currentMonth + 1, 1, 0, 0, 0); // Next month
}


//updatint the date

function upToDate() {

    const currentMonth = new Date();
    const eventDate = nextMonth - currentMonth;

    const d = Math.floor(eventDate / 1000 / 60 / 60 / 24);
    const h = Math.floor(eventDate / 1000 / 60 / 60) % 24;
    const m = Math.floor(eventDate / 1000 / 60) % 60;
    const s = Math.floor(eventDate / 1000) % 60;

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

setInterval(upToDate, 1000)