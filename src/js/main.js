//            SWAP BACKGROUND
const fixed_bg = document.getElementById("background__fixed");
const opacity_block = document.getElementById("opacity_block");
let bg = true;
window.addEventListener("scroll", function(){
    let rect = opacity_block.getBoundingClientRect();
    if(rect.top + window.innerHeight < -100 && bg){
        bg = false;
    }
    else if(rect.top + window.innerHeight > 0 && !bg){
        bg = true;
    }
    bg? fixed_bg.classList.remove("background__fixed_two") : fixed_bg.classList.add("background__fixed_two");
});