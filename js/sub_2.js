var slides = document.querySelector('.slide');
var slideImg = document.querySelectorAll('.slide li');
var idx = 0;
var slideIdx = slideImg.length;
var prev_btn = document.getElementById('prev');
var next_btn = document.getElementById('next');
s_Width = 600;
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
    if(idx < slideIdx - 1){
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