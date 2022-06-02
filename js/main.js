var tap = document.getElementById('navtap');

function openbtn(){
    tap.style.width = '100%';
}
function closebtn(){
    tap.style.width = '0';
}

var ft = document.querySelector('footer');
function scroll_top(){
    if(window.scrollY >= 940){
        topbtn.style.opacity = '1';
        topbtn.style.transition = 'all 1s ease';
        if(window.scrollY >= (ft.offsetTop - window.outerHeight)){
                topbtn.style.opacity = '0';
                topbtn.style.transition = 'all 1s ease';
        }
    } else {
        topbtn.style.opacity = '0';
        topbtn.style.transition = 'all 1s ease';
    }
    
}
function scrolltotop(){
   window.scrollTo({top:0,left:0,behavior:'smooth'});
}
window.addEventListener('scroll',scroll_top);

