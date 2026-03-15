function cursorEffect(){
    let cursor = document.querySelector("#cursor");
    let page1Content = document.querySelector("#page1-content");

    page1Content.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            left: dets.x,
            top: dets.y
        })
    })

    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{ scale:1 })
    })

    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{ scale:0 })
    })
}

cursorEffect();


function page2Animation(){
gsap.from("#page2-content span",{
    y:120,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2",
        start:"top 72%",
        end:"top 20%",
        scrub:2,
  
    }
})

}
page2Animation();