var tap = document.getElementById('navtap');

function openbtn(){
    tap.style.width = '100%';
}
function closebtn(){
    tap.style.width = '0';
}

var ft = document.querySelector('footer');
var topbtn = document.getElementById('topbtn');
function scroll_top(){
    if(window.scrollY >= 940){
        topbtn.classList.add('on');
        if(window.scrollY >= (ft.offsetTop - window.outerHeight)){
            topbtn.classList.remove('on');
        }
    } else {
        topbtn.classList.remove('on');
    }s  
}
function scrolltoTop(){
   window.scrollTo({top:0,left:0,behavior:'smooth'});
}
window.addEventListener('scroll',scroll_top);

