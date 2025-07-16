const parallax_el=document.querySelectorAll(".thala")

let xvalue=0,
yvalue=0;

window.addEventListener("mousemove",(e)=>{
    xvalue=e.clientX-window.innerWidth/2;
    yvalue=e.clientY-window.innerHeight/2;

    parallax_el.forEach((el)=>{
        let speedx =el.dataset.speedx;
        el.style.transform='translatex(calc(-50%+${xvalue}px)) translatey(calc(-50%+${xvalue}px))';
        console.log(xvalue,yvalue)

    })

})