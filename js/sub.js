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