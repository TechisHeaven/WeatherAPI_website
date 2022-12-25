const containers = document.getElementsByClassName('dark-theme-con');
const heading = document.getElementsByClassName('headings-dark');
const side_bar = document.getElementsByClassName('side-bar');
const sidebaritems = document.getElementsByClassName('weather');
const searchInput = document.getElementById('city');
const profilebtn = document.getElementById('profilebtn');
const toggle = document.getElementById('toggle')
const toggle2 = document.getElementById('toggle2')
const tempmain = document.getElementById("temp");
const city2 = document.getElementById('city2');
const overlay = document.getElementById('backgroundOverlay')
const logo1 = document.getElementById('logo1')
const logo = document.querySelector('logo')
const sidebarmain1 = document.getElementById("sidebarmain1");

const con2item  = document.getElementsByClassName("con-2-items");


const sidebar = document.getElementById("sidebar")

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
    tempmain.classList.toggle("active")
    for (let indexforbag = 0; indexforbag < con2item.length; indexforbag++) {
        con2item[indexforbag].classList.toggle("active");
      
    }
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
    tempmain.classList.toggle("active")
    city2.classList.toggle("active")
    for (let indexforbag = 0; indexforbag < con2item.length; indexforbag++) {
        con2item[indexforbag].classList.toggle("active");
    }
}


const items = document.getElementsByClassName("items");

logo1.onclick = function(){
    sidebarmain1.classList.toggle("active");
    for(let i = 0; i < items.length; i++) {
        items[i].classList.toggle("active");
    }
   firstsec.classList.toggle("active")
}








profilebtn.onclick = function(e){

    // profile_con.classList.toggle("show")
   
    if(e.target.id == profilebtn){
        profile_con.classList.toggle("show")
        overlay.style.display = 'none';

    }
    else{
        profile_con.classList.toggle("show")
     
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





const current_time = document.getElementById("current_time");




function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

current_time.innerHTML = formatAMPM(new Date);


  
  





document.onclick = function(e){
    if (e.target.id !== 'sidebarmain1'&& e.target.id !== 'navitem' && e.target.id !== 'logo1' && e.target.id !== 'click1') {
        sidebarmain1.classList.remove("active");
        for(let i = 0; i < items.length; i++) {
            items[i].classList.remove("active");
        }
        firstsec.classList.remove("active")
    }
}



body.onclick = function(e){
    if (e.target.id !== 'profilebtn' && e.target.id !== 'profile_con' && e.target.id !== 'toggle2' && e.target.id !== 'indi') {
        profile_con.classList.remove('show')
    }
}


body.oncontextmenu = function(ev){
    context.classList.add("active")
    ev.preventDefault()
    setInterval(() => {
        context.classList.add("trans");
    }, 3000);
    setInterval(() => {
        context.classList.remove("active")
    }, 4000);
}

closeContextbtn1.onclick = function(){
    clearInterval();
    context.classList.remove("active");
}