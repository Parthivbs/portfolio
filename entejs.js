const chaliEl=document.querySelector(".chali")
const butt1El=document.querySelector(".butt1")
const popupcontainer1El=document.querySelector(".popupcontainer1")
const close1El=document.querySelector(".close1")
butt1El.addEventListener("click",()=>{
    chaliEl.classList.add("active");
    popupcontainer1El.classList.remove("active");
})
close1El.addEventListener("click",()=>{
    chaliEl.classList.remove("active");
    popupcontainer1El.classList.add("active");

})
const butt2El=document.querySelector(".butt2")
const popupcontainer2El=document.querySelector(".popupcontainer2")
const close2El=document.querySelector(".close2")
butt2El.addEventListener("click",()=>{
    chaliEl.classList.add("active");
    popupcontainer2El.classList.remove("active");
})
close2El.addEventListener("click",()=>{
    chaliEl.classList.remove("active");
    popupcontainer2El.classList.add("active");

})
const butt3El=document.querySelector(".butt3")
const popupcontainer3El=document.querySelector(".popupcontainer3")
const close3El=document.querySelector(".close3")
butt3El.addEventListener("click",()=>{
    chaliEl.classList.add("active");
    popupcontainer3El.classList.remove("active");
})
close3El.addEventListener("click",()=>{
    chaliEl.classList.remove("active");
    popupcontainer3El.classList.add("active");

})
const butt4El=document.querySelector(".butt4")
const popupcontainer4El=document.querySelector(".popupcontainer4")
const close4El=document.querySelector(".close4")
butt4El.addEventListener("click",()=>{
    chaliEl.classList.add("active");
    popupcontainer4El.classList.remove("active");
})
close4El.addEventListener("click",()=>{
    chaliEl.classList.remove("active");
    popupcontainer4El.classList.add("active");

})
