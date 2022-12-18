const containers = document.getElementsByClassName('dark-theme-con');
const heading = document.getElementsByClassName('headings-dark');
const side_bar = document.getElementsByClassName('side-bar');
const sidebaritems = document.getElementsByClassName('weather');
const searchInput = document.getElementById('city');
const profilebtn = document.getElementById('profilebtn');
// const profile_con = document.getElementById('profile_con')
const toggle = document.getElementById('toggle')
const toggle2 = document.getElementById('toggle2')
const headingdark = document.getElementById("temp");
const city2 = document.getElementById('city2');
var overlay = document.getElementById('backgroundOverlay')


toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    containers[0].classList.toggle('active');
    containers[1].classList.toggle('active');
    containers[2].classList.toggle('active');
    heading[0].classList.toggle('active');
    heading[1].classList.toggle('active');
    subnav_bar.classList.toggle('active')
    searchInput.classList.toggle('active');
    side_bar[0].classList.toggle('dark');
    sidebaritems[0].classList.toggle('active');
    headingdark.classList.toggle("active")
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
    searchInput.classList.toggle('active');
    profile_con.classList.toggle('active'); 
    headingdark.classList.toggle("active")
    city2.classList.toggle("active")
}



profilebtn.onclick = function(e){

    // profile_con.classList.toggle("show")
   
    if(e.target.id == profilebtn){
        profile_con.classList.toggle("show")
        overlay.style.display = 'none';

    }
    else{
        profile_con.classList.toggle("show")
        console.log('removed sir')
     
        overlay.style.display = 'block';
    }



    while(e.target.id == profilebtn || e.target.id == profile_con){
        
    }
    // profile_con.classList.toggle("show")

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



