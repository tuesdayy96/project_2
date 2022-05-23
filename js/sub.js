// 호버 시 이미지 전환
var main = document.getElementById('slide');
var resort = document.querySelectorAll('.resort_btn div');
function east_r(){
    main.style.backgroundImage = "url(../img/resort/east.jpg)";
    main.style.transition = "all 1s ease-in-out";
}
function south_r(){
    main.style.backgroundImage = "url(../img/resort/south.jpg)";
    main.style.transition = "all 1s ease-in-out";
}
function west_r(){
    main.style.backgroundImage = "url(../img/resort/west.jpg)";
    main.style.transition = "all 1s ease-in-out";
}
function hovers(){
    east.addEventListener('mouseover',east_r);
    south.addEventListener('mouseover',south_r);
    west.addEventListener('mouseover',west_r);
}
hovers();

// 클릭 시 스크롤 이동
var locate = document.getElementById('container').offsetTop;

east.onclick = function scroll_east(){
    window.scrollTo({top:locate,behavior:"smooth"});
}

// 룸 호버
var r_x = document.querySelector('.rooms_x');
var r_delux = document.querySelector('.rooms_delux');
var r_suite = document.querySelector('.rooms_suite');
var r_img = r_x.getElementsByTagName('img');

function r_hover1(){
    r_img[0].style.opacity = 1;
    r_delux.getElementsByTagName('div')[0].style.backgroundColor = '#333';
    r_delux.getElementsByTagName('h4')[0].style.color = '#fff';
}
function r_hover2(){
    r_img[1].style.opacity = 1;
    r_suite.getElementsByTagName('div')[0].style.backgroundColor = '#333';
    r_suite.getElementsByTagName('h4')[0].style.color = '#fff';
}
function r_hoverOut(){
    r_img[0].style.opacity = 0.7;
    r_img[1].style.opacity = 0.7;
    r_delux.getElementsByTagName('div')[0].style.backgroundColor = '#fff';
    r_delux.getElementsByTagName('h4')[0].style.color = '#333';
    r_suite.getElementsByTagName('div')[0].style.backgroundColor = '#fff';
    r_suite.getElementsByTagName('h4')[0].style.color = '#333';
}
function room(){
r_delux.addEventListener('mouseover',r_hover1);
r_suite.addEventListener('mouseover',r_hover2);
r_delux.addEventListener('mouseleave',r_hoverOut);
r_suite.addEventListener('mouseleave',r_hoverOut);
}
room();
