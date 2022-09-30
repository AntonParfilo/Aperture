window.addEventListener("scroll", scrollHandler);

//            BACKGROUND
const fixed_bg = document.getElementById("background__fixed");
const opacity_block = document.getElementById("opacity_block");
let bg = true;
//             HEADER
const header = document.querySelector(".header");
let header_height = true;
//              WHAT WE DO
const what_title = document.getElementById("what_title");
const what_subtitle = document.getElementById("what_subtitle");
const what_block1 = document.getElementById("what_block1");
const what_block2 = document.getElementById("what_block2");
const what_block3 = document.getElementById("what_block3");
const what_block4 = document.getElementById("what_block4");
//              OPACITY BLOCKS
const opacity_title = document.querySelector(".opacity_title");
const opacity_subtitle = document.querySelector(".opacity_subtitle");

//              CLICK BURGER ICON
const burger_icon = document.querySelector(".header__burger");
burger_icon.addEventListener("click", el => { burger_icon.classList.toggle("active") });

function scrollHandler(){
    //            SWAP BACKGROUND
    let rect = opacity_block.getBoundingClientRect();
    if(rect.top + window.innerHeight < -100 && bg){
        bg = false;
    }
    else if(rect.top + window.innerHeight > 0 && !bg){
        bg = true;
    }
    bg? fixed_bg.classList.remove("background__fixed_two") : fixed_bg.classList.add("background__fixed_two");

    //              HEADER HEIGHT
    if(window.scrollY > 5){
        header_height = false;
    } else header_height = true;
    header_height? header.classList.remove("header_scroll") : header.classList.add("header_scroll");
    //                   WHAT WE DO
    let what_title_rect = what_title.getBoundingClientRect();
    let what_subtitle_rect = what_subtitle.getBoundingClientRect();
    if(what_title_rect.top-innerHeight < -60){
        what_title.classList.add("showToBottom");
    }
    if(what_subtitle_rect.top-innerHeight < -60){
        what_subtitle.classList.add("showToBottom");
    }
    let what_block1_rect = what_block1.getBoundingClientRect();
    let what_block2_rect = what_block2.getBoundingClientRect();
    let what_block3_rect = what_block3.getBoundingClientRect();
    let what_block4_rect = what_block4.getBoundingClientRect();
    if(what_block1_rect.top-innerHeight < -200){
        what_block1.classList.add("showOpacity");
    }
    if(what_block2_rect.top-innerHeight < -200){
        what_block2.classList.add("showOpacity");
    }
    if(what_block3_rect.top-innerHeight < -200){
        what_block3.classList.add("showOpacity");
    }
    if(what_block4_rect.top-innerHeight < -200){
        what_block4.classList.add("showOpacity");
    }
    //                OPACITY BLOCKS
    let opacity_title_rect = opacity_title.getBoundingClientRect();
    let opacity_subtitle_rect = opacity_subtitle.getBoundingClientRect();
    if(opacity_title_rect.top-innerHeight < -60){
        opacity_title.classList.add("showToRight");
    }
    if(opacity_subtitle_rect.top-innerHeight < -60){
        opacity_subtitle.classList.add("showToRight");
    }
    
}