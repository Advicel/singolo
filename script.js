let slideIndex = 1;
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow")
const slides = document.querySelectorAll(".slide");
const portfolioButtons = document.querySelectorAll(".button");
const verticalPhoneButton = document.querySelector(".buttonHomeVertical");
const horizontalPhoneButton = document.querySelector(".buttonHomeHorizontal");
const slide2PhoneButton = document.querySelector(".buttonHomeSlide2");
const verticalPhoneDisplay = document.querySelector(".phoneVerticalDisplay");
const horizontalPhoneDisplay = document.querySelector(".phoneHorizontalDisplay");
const slide2PhoneDisplay = document.querySelector(".phoneSlide2Display");

const PhoneDisplay = document.querySelectorAll(".phoneDisplay");

const navButtons = document.querySelectorAll(".navigation-link");
const galleryImg =document.getElementsByClassName('gallery-img'); 
const submitButton = document.querySelector(".send");
const mixRand=()=> {
    return Math.random()-0.5;
}


for (const button of navButtons) {
  button.addEventListener('click',()=> setNavButtonActive(button));
}
for (const button of portfolioButtons) {
  button.addEventListener('click',()=> swapImg(button));
}
for(const img of galleryImg){
    img.addEventListener('click',()=>setGalleryImgActive(img))
}


leftArrow.addEventListener("click",()=>showSlides(slideIndex-=1));
rightArrow.addEventListener("click",()=>showSlides(slideIndex+=1));
verticalPhoneButton.addEventListener("click",()=>tooglePhoneDisplay(verticalPhoneDisplay));
horizontalPhoneButton.addEventListener("click",()=>tooglePhoneDisplay(horizontalPhoneDisplay));
slide2PhoneButton.addEventListener("click",()=>tooglePhoneDisplay(slide2PhoneDisplay));

function showSlides(n){
    if(n>slides.length) slideIndex = 1;
    if(n<1) slideIndex=slides.length;
    slides.forEach((slide,index)=>slides[index].style.display="none");
    slides[slideIndex-1].style.display="flex";
}
function tooglePhoneDisplay(screen){
    if(screen.style.display==="none"){
        screen.style.display = "inline-flex";
    } else {
        screen.style.display="none";
    }
}
function swapImg(button){
    const arrImg=Array.from(galleryImg);
    Array.from(portfolioButtons).map(e=>{e.style.color="#666d89",e.style.borderColor="#666d89"});
    button.style.color="#c5c5c5";
    button.style.borderColor="#c5c5c5";
    arrImg.map(e=>e.style.border="none");
    const arrImgSrcMix=arrImg.map(e=>e.src).sort((a,b) =>mixRand());
    arrImg.map((e,i)=>e.src=arrImgSrcMix[i]);
}
function setNavButtonActive(button){
    Array.from(navButtons).map(e=>e.style.color="white");
    button.style.color = "#f06c64";
}
function setGalleryImgActive(img){
    Array.from(galleryImg).map(e=>e.style.border="none");
    img.style.border="5px solid #F06C64";
}
function sendMessage(){
    /*const fieldName = document.querySelector(".fieldName").value;
    const fieldEmail = document.querySelector(".fieldEmail").value;*/
    const fieldSubject = document.querySelector(".fieldSubject").value;
    const fieldDecription = document.querySelector(".fieldDecription").value;
    
    let message="Письмо отправлено";
    
    if(fieldSubject=="") {
        message+="\nБез темы";
    }else{
        message+="\nТема: "+fieldSubject;
    }

    if(fieldDecription==""){
        message+="\nБез описания";
    }else{
        message+="\nОписание: "+fieldDecription;
    }
    alert(message);
    return true;
}


function scrollToAnchor(element){
    //document.querySelector(element).scrollIntoView({behavior: "smooth",block:"center"});
    const headerHeight = 95;

    // scroll to your element
    document.querySelector(element).scrollIntoView();

    // now account for fixed header
    const scrolledY = window.scrollY;

    if(scrolledY){
        window.scroll(0, scrolledY - headerHeight);
    }
}