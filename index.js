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