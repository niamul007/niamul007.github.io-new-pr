function wraped (){
    document.addEventListener("DOMContentLoaded",()=>{
        let sayPgae2 = document.querySelector(".page-count");
        let nextBtn = document.querySelector(".next-btn")
        sayPgae2.innerText ='Page 2 of 2'
        nextBtn.style.display ='none';
    })
}

wraped();

