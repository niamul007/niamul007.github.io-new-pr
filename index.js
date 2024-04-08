let showbar =document.querySelector(".showbar");
let openBar = document.querySelector(".siderBar-appear");
let dark = document.querySelector(".dark")
let closeBar = document.querySelector(".icon-close");
let body = document.querySelector("body");

showbar.addEventListener("click",()=>{
    openBar.style.display ="flex";
    dark.style.display ="flex";
    document.body.style.overflow = 'hidden';
    // Disable text selection
    document.body.style.userSelect = 'none';
})

closeBar.addEventListener("click",()=>{
    openBar.style.display ="none";
    dark.style.display ="none";
        // Restore scroll
        document.body.style.overflow = 'auto';

        // Enable text selection
        document.body.style.userSelect = 'auto';
})


// for searchbar

let searchbar = document.querySelector(".searchApper");
let openSearchBar = document.querySelector(".search-icon");
let blurDiv = document.querySelector(".blur");

openSearchBar.addEventListener("click",()=>{
    searchbar.style.display="block";
    blurDiv.style.display="block";
    document.body.style.overflow = 'hidden';
    // Disable text selection
    document.body.style.userSelect = 'none';
})

document.addEventListener("click",function(event){
    let isClickInside = blurDiv.contains(event.target);
    if(isClickInside){
        searchbar.style.display="none";
        blurDiv.style.display="none";
    }
})

// for adding hover
// function forHover() {
//     let img = document.querySelector(".topic-img");
//     let num_img2 =document.querySelector(".t-i-2");
//     num_img2.classList.add('active-h')
//     img.classList.add('active');
// }

// function removeHover() {
//     let img = document.querySelector(".topic-img");
//     img.classList.remove('active');
//     let num_img2 =document.querySelector(".t-i-2");
//     num_img2.classList.remove('active-h')
// }

function forP3Next(){
    let forNext = document.querySelector(".for-next");
    forNext.classList.add("active");
}

function forp3OutNext(){
    let forNext = document.querySelector(".for-next");
    forNext.classList.remove("active");
}

function forP3Prev(){
    let forPrev = document.querySelector(".for-prev");
    forPrev.classList.add("active");
}

function forp3OutPrev(){
    let forPrev = document.querySelector(".for-prev");
    forPrev.classList.remove("active");
}
