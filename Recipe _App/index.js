document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener("click", function () {
        console.log("Menu toggle clicked");
        sidebar.classList.toggle("active");
    });
});


// Move the menu to right and left when clicked back and next
const step = 100;
const stepFilter = 60;
let scrolling = true;

const backButtons = document.querySelectorAll('.back');
backButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const highlightWrapper = document.querySelector('.highlight-wrapper');
        highlightWrapper.scrollLeft -= step;
    });
});

const nextButtons = document.querySelectorAll('.next');
nextButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const highlightWrapper = document.querySelector('.highlight-wrapper');
        highlightWrapper.scrollLeft += step;
    });
});

// When click back and next menu filters
const backMenus = document.querySelectorAll('.back-menus');
backMenus.forEach(menu => {
    menu.addEventListener('click', function (e) {
        e.preventDefault();
        const filterWrapper = document.querySelector('.filter-wrapper');
        filterWrapper.scrollLeft -= stepFilter;
    });
});

const nextMenus = document.querySelectorAll('.next-menus');
nextMenus.forEach(menu => {
    menu.addEventListener('click', function (e) {
        e.preventDefault();
        const filterWrapper = document.querySelector('.filter-wrapper');
        filterWrapper.scrollLeft += stepFilter;
    });


});


