// SLIDER
const btnNext = document.querySelector(".btn-next"),
      btnPrev = document.querySelector(".btn-prev"),
      sliders = document.querySelectorAll(".slider"),
      dots = document.querySelectorAll(".dot");



let index = 0;

const activeSlide = i => {
    
    for(slider of sliders) {
        slider.classList.remove("show");
    }
    sliders[i].classList.add("show")
}

const activeDot = i => {
    
    for(dot of dots) {
        dot.classList.remove("active");
    }
    dots[i].classList.add("active")
}

const prepareCurrent = ind => {
        activeSlide(ind);
        activeDot(ind)
}


const nextSlide = () =>  {
    if(index === sliders.length - 1) {
        index = 0; 
        prepareCurrent(index);
        
    } else {
        index++;
        prepareCurrent(index);
    }
}

const prevSlide = () =>  {
    if(index === 0) {
        index = sliders.length - 1; 
        prepareCurrent(index);
    } else {
        index--;
        prepareCurrent(index);
    }
}

dots.forEach((el, iDot) => {
    el.addEventListener("click", () => {
        index = iDot;
        prepareCurrent(index);
    })
})

setInterval(() => {nextSlide()}, 3000);
    



btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide)

// TABS

const tabsWrap = document.querySelector(".tab-imgs")
const tab = document.querySelectorAll(".tab-img")
const tContent = document.querySelectorAll(".tab-content")
const imgTab = document.querySelectorAll(".img-tab")


function hideContent() {
    tContent.forEach(el  => {
        el.classList.add("hide")
        el.classList.remove("show")
    })
    tab.forEach(el =>{
         el.classList.remove("tab-active")})
    }

function showContent(i = 0) {
    tab[i].classList.add("tab-active")
    tContent[i].classList.add("show")
    tContent[i].classList.remove("hide")  
}

hideContent()
showContent()

tabsWrap.addEventListener("click", function(e) {
    let target = e.target;

    if(target.classList.contains("tab-img") ){
        tab.forEach((el, i) => {
            if(el === target){
                hideContent()
                showContent(i)
            }
        })
    }
})

// scroll up img show/hide 

const scrollUp = document.querySelector(".scroll-up"); 
const sectionSlider = document.querySelector(".section-slider"); 

function upByScroll() {
    if(window.pageYOffset > sectionSlider.scrollHeight){
        showArrowUp()
    } else {
        hideArrowUp()
    }
}

function showArrowUp() {
    scrollUp.classList.add("show")
    scrollUp.classList.remove("hide")

}

function hideArrowUp() {
    scrollUp.classList.add("hide")
    scrollUp.classList.remove("show")
}


window.addEventListener("scroll", upByScroll)

// smooth scrolling UP

const anchors = document.querySelectorAll("a[href*='#']")


for (let anchor of anchors){
    anchor.addEventListener("click", function(ev){
        ev.preventDefault();
        const blockID = anchor.getAttribute("href")
        document.querySelector("" + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
 
// producrts scroll

const prodlink = document.querySelector(".products-link")



function scrollFor(e) {
    window.scroll({
        left: 0,
        top: e.offsetTop - 140,
        behavior: "smooth"
    })

}

prodlink.addEventListener("click", function(e) {
    scrollFor(tabsWrap)
})