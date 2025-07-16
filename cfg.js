const containerEl=document.querySelector(".container")
const buttEl=document.querySelector(".butt")
const popupcontainerEl=document.querySelector(".popupcontainer")
const closeEl=document.querySelector(".close")
buttEl.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popupcontainerEl.classList.remove("active");
})
closeEl.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupcontainerEl.classList.add("active");

})