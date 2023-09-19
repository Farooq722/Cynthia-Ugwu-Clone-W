const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function circleFollowsMouse(){
    window.addEventListener("mousemove",function(details){
        this.document.querySelector(".mouse-circle").style.transform = `translate(${details.clientX}px,${details.clientY}px)`;
    })
};
circleFollowsMouse();

document.querySelectorAll(".element-1").forEach(function(element) {
    element.addEventListener("mousemove",function(details){
       gsap.to(element.querySelector("img"),{
        opacity:1,
        ease:power1,
       });
    })
});