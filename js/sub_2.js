var slides = document.querySelector('.slide');
var slideImg = document.querySelectorAll('.slide li');
var idx = 0;
var slideIdx = slideImg.length;
var prev_btn = document.getElementById('prev');
var next_btn = document.getElementById('next');
var s_Width = 600;
s_Margin = 50;
makeClone();
initslide();
function makeClone(){
    let cloneSlide_f = slideImg[0].cloneNode(true);
    let cloneSlide_l = slides.lastElementChild.cloneNode(true);
    slides.append(cloneSlide_f);
    slides.insertBefore(cloneSlide_l, slides.firstElementChild);
}
function initslide(){
    slides.style.width = (s_Width + s_Margin) * (slideIdx + 2) + 'px';
    slides.style.left = -(s_Width + s_Margin) + 'px';
}
next_btn.addEventListener('click',function(){
    if(idx <= slideIdx - 1){
        slides.style.left = -(idx + 2) * (s_Width + s_Margin) + 'px';
        slides.style.transition = '0.5s ease-out';
    }
    if(idx === slideIdx - 1 ){
        setTimeout(function(){
            slides.style.left = -(s_Width + s_Margin) + 'px';
            slides.style.transition = '0s ease-out';
        },500);
        idx = -1;
    }
    idx += 1;
})
prev_btn.addEventListener('click',function(){
    if(idx >=0){
        slides.style.left = -idx * (s_Width + s_Margin) + 'px';
        slides.style.transition = '0.5s ease-out';
    }
    if(idx === 0){
        setTimeout(function(){
            slides.style.left = -slideIdx * (s_Width + s_Margin) + 'px';
            slides.style.transition = 'all 0s ease-out';
        },500);
        idx = slideIdx;
    }
    idx -=1; 
})

// 애니메이션이 끝나면

var surfer = document.querySelector('.surfer');
var surf = document.querySelector('.path1');
var book = document.querySelector('.booking');
var anibox = document.querySelector('.animate') 
surf.addEventListener('animationend',function(){
    surfer.style.left = '20%';
    book.style.opacity = '1';
    book.style.top = '250px';
    secondbox.style.display = 'block';
    anibox.style.backgroundColor = 'transparent';
})

// 스크롤 애니메이션

const intro = document.querySelector('.intro');
const path2 = document.querySelector('.path2');
const path2Length = path2.getTotalLength();

path2.style.strokeDasharray = path2Length;
path2.style.strokeDashoffset = calcoffset(window.innerHeight*0.7, intro, path2Length);

function calcoffset(scrollY, element, length){
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    const value = length - (length * ratio)
    return value < 0 ? 0 : value > length ? length : value;
}

function pathHandler(){
    const scrollY = window.scrollY + (window.innerHeight * 0.55);
    path2.style.strokeDashoffset = calcoffset(scrollY,intro,path2Length);
}

window.addEventListener('scroll',pathHandler);