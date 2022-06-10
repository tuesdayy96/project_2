// 애니메이션이 끝나면
var surfer = document.querySelector('.surfer');
    var surf = document.querySelector('.path1');
    var book = document.querySelector('.booking');
    var anibox = document.querySelector('.animate') 
surf.addEventListener('animationend',function(){
        anibox.style.display = 'flex';
        surfer.style.position = 'static';
        surfer.style.transform = 'translate(0,0)';
        book.style.position = 'static';
        book.style.transform = 'translateX(-25vw)'
        book.style.opacity = '1';
        secondbox.style.display = 'block';
        anibox.style.backgroundColor = 'transparent';
    });
    


// 스크롤 애니메이션

const intro = document.querySelector('#section1');
const path2 = document.querySelector('.path2');
const path2Length = path2.getTotalLength();

path2.style.strokeDasharray = path2Length;
path2.style.strokeDashoffset = calcoffset(window.innerHeight*0.7, intro, path2Length);

function calcoffset(scrollY, element, length){
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    const value = length - (length * ratio);
    return value < 0 ? 0 : value > length ? length : value;
}

function pathHandler(){
    const scrollY = window.scrollY + (window.innerHeight * 0.7);
    path2.style.strokeDashoffset = calcoffset(scrollY,intro,path2Length);
}

window.addEventListener('scroll',pathHandler);

// var scroll_item = document.getElementsByClassName('textbox');
// function scrollmove(){
//     for(var i=0;i<scroll_item.length;i++){
//         if(window.scrollY >= 1000){
//             scroll_item[0].style.opacity = '1';
//             scroll_item[0].style.marginTop = '0';
//             scroll_item[0].style.transition = 'all 1s ease';
//         } else if(window.scrollY <= 1000){
//             scroll_item[0].style.opacity = '0';
//             scroll_item[0].style.marginTop = '150px';
//             scroll_item[0].style.transition = 'all 1s ease';
//         }
//         if(window.scrollY >= 1400){
//             scroll_item[1].style.opacity = '1';
//             scroll_item[1].style.marginTop = '0';
//             scroll_item[1].style.transition = 'all 1s ease';
//         } else if(window.scrollY <= 1400){
//             scroll_item[1].style.opacity = '0';
//             scroll_item[1].style.marginTop = '150px';
//             scroll_item[1].style.transition = 'all 1s ease';
//         } 
//         if(window.scrollY > scroll_item[i].offsetTop + 300){
//             scroll_item[i].style.opacity = '1';
//             scroll_item[i].style.marginTop = '0';
//             scroll_item[i].style.transition = 'all 1s ease';
//         } else if(window.scrollY < scroll_item[i].offsetTop){
//             scroll_item[i].style.opacity = '0';
//             scroll_item[i].style.marginTop = '150px';
//             scroll_item[i].style.transition = 'all 1s ease';
//         }
//     }
// }
// window.addEventListener('scroll',scrollmove);



// 사이즈 조절
var slides = document.querySelector('.slide');
    var slideImg = document.querySelectorAll('.slide li');
    var idx = 0;
    var slideIdx = slideImg.length;
    var prev_btn = document.getElementById('prev');
    var next_btn = document.getElementById('next');
    var s_Width;
        s_Margin = 50;

makeClone();
function makeClone(){
    let cloneSlide_f = slideImg[0].cloneNode(true);
    let cloneSlide_l = slides.lastElementChild.cloneNode(true);
    slides.append(cloneSlide_f);
    slides.insertBefore(cloneSlide_l, slides.firstElementChild);
}
function mediaSize(){
    if(window.matchMedia("(max-width: 600px)").matches){
        s_Width = 450;
        initslide();
        function initslide(){
            slides.style.width = (s_Width + s_Margin) * (slideIdx + 2) + 'px';
            slides.style.left = -(s_Width + s_Margin) + 'px';
        }
    } else if (window.matchMedia("(min-width: 601px) and (max-width: 1259px)").matches){
            s_Width = 600;
            initslide();
        function initslide(){
            slides.style.width = (s_Width + s_Margin) * (slideIdx + 2) + 'px';
            slides.style.left = -(s_Width + s_Margin) + 'px';
        }
        } else if(window.matchMedia("(min-width: 1260px)").matches){
            s_Width = 1000;
            initslide();
        function initslide(){
            slides.style.width = (s_Width + s_Margin) * (slideIdx + 2) + 'px';
            slides.style.left = -(s_Width + s_Margin) + 'px';
        }
        
    }
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
mediaSize();
window.addEventListener('resize',mediaSize,false);