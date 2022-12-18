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

toggle2.onclick = function(){
    toggle2.classList.toggle('active');
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
    profile_con.classList.toggle('active')
}


profilebtn.click = function(){
    profile_con.classList.toggle("show")
}









const logosmall = document.getElementById("logo-small");
const hamburger  = document.getElementById("hamburgur");
const close = document.getElementById("close");

logosmall.onclick = function(){
    hamburger.classList.add('show');
    hamburger.classList.add('showslide');
    close.classList.remove("hidden");
}
close.onclick = function(){
    hamburger.classList.add('showslide');
    hamburger.classList.remove('show');
    close.classList.add("hidden");

}



