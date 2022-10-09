
//############################# BACKGROUND #########################
const fixed_bg = document.getElementById("background__fixed");
const opacity_block = document.getElementById("opacity_block");
let bg = true;

//############################# HEADER #########################
const header = document.querySelector(".header");
let header_height = true;

//############################# CLICK BURGER ICON #########################
const burger_icon = document.querySelector(".header__burger");
const burger_menu = document.querySelector(".burgermenu");
burger_icon.addEventListener("click", el => {
    burger_icon.classList.toggle("active");
    burger_menu.classList.toggle("open");
});
//############################# ANIMATIONS #########################
window.addEventListener("scroll", scrollHandler);
const animate_bottom = document.getElementsByClassName("animate_bottom");
const animate_opacity = document.getElementsByClassName("animate_opacity");
const animate_right = document.getElementsByClassName("animate_right");
const animate_left = document.getElementsByClassName("animate_left");
function scrollHandler(){
    for(let el of animate_bottom){
        let el_rect = el.getBoundingClientRect();
        if(el_rect.top-innerHeight < -60){
            el.classList.add("showToBottom");
        }
    }
    for(let el of animate_opacity){
        let el_rect = el.getBoundingClientRect();
        if(el_rect.top-innerHeight < -60){
            el.classList.add("showOpacity");
        }
    }
    for(let el of animate_right){
        let el_rect = el.getBoundingClientRect();
        if(el_rect.top-innerHeight < -60){
            el.classList.add("showToRight");
        }
    }
    for(let el of animate_left){
        let el_rect = el.getBoundingClientRect();
        if(el_rect.top-innerHeight < -60){
            el.classList.add("showToLeft");
        }
    }

//############################# SWAP BACKGROUND #########################
    let rect = opacity_block.getBoundingClientRect();
    if(rect.top + window.innerHeight < -100 && bg){
        bg = false;
    }
    else if(rect.top + window.innerHeight > 0 && !bg){
        bg = true;
    }
    bg? fixed_bg.classList.remove("background__fixed_two") : fixed_bg.classList.add("background__fixed_two");

  //############################# HEADER HEIGHT #########################
    if(window.scrollY > 5){
        header_height = false;
    } else header_height = true;
    header_height? header.classList.remove("header_scroll") : header.classList.add("header_scroll");

}
