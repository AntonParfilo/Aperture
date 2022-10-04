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
//              OPACITY
const opacity_title = document.querySelector(".opacity_title");
const opacity_subtitle = document.querySelector(".opacity_subtitle");
//              TOOLS
const tools_title = document.querySelector(".tools__title");
const tools_subtitle = document.querySelector(".tools__subtitle");
const tools_button = document.querySelector(".tools__button");
const tools_text = document.querySelector(".tools__text");
//              MONSTERA
const monstera_title = document.querySelector(".monstera__title");
const monstera_text = document.querySelector(".monstera__text");
//              CLIENTS
const clients_title = document.querySelector(".clients__title");
const clients_subtitle = document.querySelector(".clients__subtitle");
//              OPACITY2
const opacity_title2 = document.querySelector(".opacity_title2");
const opacity_subtitle2 = document.querySelector(".opacity_text2");
//              FOOTER
const footer_title = document.querySelector(".footer__title");
const footer_subtitle = document.querySelector(".footer__subtitle");
const footer_button = document.querySelector(".footer__button");
const footer_left1 = document.querySelector(".footer__leftText1");
const footer_left2 = document.querySelector(".footer__leftText2");
const footer_input = document.querySelector(".input_wrapper");

//              CLICK BURGER ICON
const burger_icon = document.querySelector(".header__burger");
const burger_menu = document.querySelector(".burgermenu");
burger_icon.addEventListener("click", el => {
    burger_icon.classList.toggle("active");
    burger_menu.classList.toggle("open");
});


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
    //                OPACITY 
    let opacity_title_rect = opacity_title.getBoundingClientRect();
    let opacity_subtitle_rect = opacity_subtitle.getBoundingClientRect();
    if(opacity_title_rect.top-innerHeight < -60){
        opacity_title.classList.add("showToRight");
    }
    if(opacity_subtitle_rect.top-innerHeight < -60){
        opacity_subtitle.classList.add("showToRight");
    }
    //                TOOLS
    let tools_title_rect = tools_title.getBoundingClientRect();
    let tools_subtitle_rect = tools_subtitle.getBoundingClientRect();
    let tools_button_rect = tools_button.getBoundingClientRect();
    let tools_text_rect = tools_text.getBoundingClientRect();
    if(tools_title_rect.top-innerHeight < -60){
        tools_title.classList.add("showToLeft");
    }
    if(tools_subtitle_rect.top-innerHeight < -60){
        tools_subtitle.classList.add("showToLeft");
    }
    if(tools_button_rect.top-innerHeight < -60){
        tools_button.classList.add("showToLeft");
    }
    if(tools_text_rect.top-innerHeight < -60){
        tools_text.classList.add("showToLeft");
    }
    //                MONSTERA 
    let monstera_title_rect = monstera_title.getBoundingClientRect();
    let monstera_text_rect = monstera_text.getBoundingClientRect();
    if(monstera_title_rect.top-innerHeight < -60){
        monstera_title.classList.add("showToRight");
    }
    if(monstera_text_rect.top-innerHeight < -60){
        monstera_text.classList.add("showToRight");
    }
    //                MONSTERA 
    let clients_title_rect = clients_title.getBoundingClientRect();
    let clients_subtitle_rect = clients_subtitle.getBoundingClientRect();
    if(clients_title_rect.top-innerHeight < -60){
        clients_title.classList.add("showToBottom");
    }
    if(clients_subtitle_rect.top-innerHeight < -60){
        clients_subtitle.classList.add("showToBottom");
    }
    //                OPACITY2 
    let opacity_title_rect2 = opacity_title2.getBoundingClientRect();
    let opacity_subtitle_rect2 = opacity_subtitle2.getBoundingClientRect();
    if(opacity_title_rect2.top-innerHeight < -60){
        opacity_title2.classList.add("showToRight");
    }
    if(opacity_subtitle_rect2.top-innerHeight < -60){
        opacity_subtitle2.classList.add("showToRight");
    }
    //                 FOOTER
    let footer_title_rect = footer_title.getBoundingClientRect();
    let footer_subtitle_rect = footer_subtitle.getBoundingClientRect();
    let footer_button_rect = footer_button.getBoundingClientRect();
    let footer_left1_rect = footer_left1.getBoundingClientRect();
    let footer_left2_rect = footer_left2.getBoundingClientRect();
    if(footer_title_rect.top-innerHeight < -60){
        footer_title.classList.add("showToBottom");
    }
    if(footer_subtitle_rect.top-innerHeight < -60){
        footer_subtitle.classList.add("showToBottom");
    }
    if(footer_button_rect.top-innerHeight < -60){
        footer_button.classList.add("showToBottom");
    }
    if(footer_left1_rect.top-innerHeight < -60){
        footer_left1.classList.add("showToLeft");
    }
    if(footer_left2_rect.top-innerHeight < -60){
        footer_left2.classList.add("showToLeft");
        footer_input.classList.add("showToRight");
    }
}