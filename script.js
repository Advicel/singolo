/*const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow")
const submitButton = document.querySelector(".send");*/


/**tooglePhoneDisplay */

const verticalPhoneDisplay = document.querySelector(".phoneVerticalDisplay");
const horizontalPhoneDisplay = document.querySelector(".phoneHorizontalDisplay");
const slide2PhoneDisplay = document.querySelector(".phoneSlide2Display");

const verticalPhoneButton = document.querySelector(".buttonHomeVertical");
const horizontalPhoneButton = document.querySelector(".buttonHomeHorizontal");
const slide2PhoneButton = document.querySelector(".buttonHomeSlide2");

verticalPhoneButton.addEventListener("click", () => togglePhoneDisplay(verticalPhoneDisplay));
horizontalPhoneButton.addEventListener("click", () => togglePhoneDisplay(horizontalPhoneDisplay));
slide2PhoneButton.addEventListener("click", () => togglePhoneDisplay(slide2PhoneDisplay));

function togglePhoneDisplay(screen) {
    screen.classList.toggle("inline-flex");
}


/**swapImg */

const mixRand = () => Math.random() - 0.5;

const portfolioButtons = document.querySelectorAll(".button");

for (const button of portfolioButtons) {
    button.addEventListener('click', () => swapImg(button));
}

function swapImg(button) {

    [...portfolioButtons].forEach(button => button.classList.remove("activePortfolioButton"));
    button.classList.add("activePortfolioButton");

    const arrImg = [...galleryImg];
    arrImg.forEach(e => e.style.border = "none");
    const arrImgSrcMix = arrImg.map(e => e.src).sort((a, b) => mixRand());
    arrImg.map((e, i) => e.src = arrImgSrcMix[i]);
}

/**setNavButtonActive */

const navButtons = document.querySelectorAll(".navigation-link");

navButtons.forEach(button => {
    button.addEventListener('click', () => setNavButtonActive(button));
});

function setNavButtonActive(button) {
    [...navButtons].forEach(button => button.classList.remove("activeNavigationButton"));
    button.classList.add("activeNavigationButton");
}


/**setGalleryImgActive */

const galleryImg = document.getElementsByClassName('gallery-img');

for (const img of galleryImg) {
    img.addEventListener('click', () => setGalleryImgActive(img))
}

function setGalleryImgActive(img) {
    [...galleryImg].map(e => e.style.border = "none");
    img.style.border = "5px solid #F06C64";
}


/**sendMessage */

function sendMessage(event) {
    event.preventDefault();
    const fieldName = document.querySelector(".fieldName");
    const fieldEmail = document.querySelector(".fieldEmail")
    const fieldSubject = document.querySelector(".fieldSubject");
    const fieldDecription = document.querySelector(".fieldDecription");

    let message = "Письмо отправлено";

    message += fieldSubject.value == "" ? "\nБез темы" : "\nТема: " + fieldSubject.value;
    message += fieldDecription.value == "" ? "\nБез описания" : "\nОписание: " + fieldDecription.value;

    alert(message);

    fieldName.value = "";
    fieldEmail.value = "";
    fieldSubject.value = "";
    fieldDecription.value = "";
}


/**smooth anchors */
function scrollToAnchor(element) {
    const headerHeight = 95;

    const scrolledY = document.querySelector(element).offsetTop;

    window.scrollTo({
        top: scrolledY - headerHeight,
        behavior: "smooth"
    });
}

function scrollToAnchor375(element) {
    const headerHeight = 71;
    document.querySelector(".headerMenu").classList.remove("activeMenu");
    const scrolledY = document.querySelector(element).offsetTop;

    window.scrollTo({
        top: scrolledY - headerHeight,
        behavior: "smooth"
    });
}


/**carousel */
const items = document.querySelectorAll(".item");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("active", direction);
    })
}

function showItem(direction) {
    items[currentItem].classList.add("next", direction);
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("next", direction);
        this.classList.add("active");
        isEnabled = true;
    })
}

function previousItem(n) {
    hideItem("to-right")
    changeCurrentItem(n - 1);
    showItem('from-left');
}

document.querySelector(".control.left").addEventListener("click", function() {
    if (isEnabled) {
        previousItem(currentItem)
    }
});

function nextItem(n) {
    hideItem("to-left")
    changeCurrentItem(n + 1);
    showItem('from-right')
}

document.querySelector(".control.right").addEventListener("click", function() {
    if (isEnabled) {
        nextItem(currentItem)
    }
});


/*burger*/
document.querySelector(".headerBurger").addEventListener("click",function(){
    document.querySelector(".headerMenu").classList.toggle("activeMenu");
    document.querySelector(".headerBurger img").classList.toggle("burgerOpened");
})



/*simple slider

const slides = document.querySelectorAll(".slide");
leftArrow.addEventListener("click",()=>showSlides(slideIndex-=1));
//rightArrow.addEventListener("click",()=>showSlides(slideIndex+=1));
function showSlides(n){
    if(n>slides.length) {
        slideIndex = 1;
    }
    if(n<1){ 
        slideIndex=slides.length;
    }
    slides.forEach((slide,index)=>slides[index].style.display="none");
    slides[slideIndex-1].style.display="flex";
}*/