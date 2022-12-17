const containers = document.getElementsByClassName('dark-theme-con');
const heading = document.getElementsByClassName('headings-dark');
const side_bar = document.getElementsByClassName('side-bar');
const sidebaritems = document.getElementsByClassName('weather');
const searchInput = document.getElementsByClassName('search-bar-input');



toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    containers[0].classList.toggle('active');
    containers[1].classList.toggle('active');
    containers[2].classList.toggle('active');
    heading[0].classList.toggle('active');
    heading[1].classList.toggle('active');
    subnav_bar.classList.toggle('active')
    searchInput[0].classList.toggle('active');
    side_bar[0].classList.toggle('dark');
    sidebaritems[0].classList.toggle('active');
}