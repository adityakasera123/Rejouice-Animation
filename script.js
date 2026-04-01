

function LocomotiveByCodepen(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
LocomotiveByCodepen();

function cursorEffect(){
  let cursor = document.querySelector("#cursor");
   let page1Content = document.querySelector("#page1-content");
    let nav = document.querySelector(".nav1");

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
        scroller: "#main",
        start:"top 72%",
        end:"top 20%",
        scrub:2,
  
    }
})

}
page2Animation();

function page4Animation(){
gsap.from("#page4-content span",{
  y:120,
  duration:1,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 69%",
    end:"top 30%",
    scrub:2,
  }
})

}
page4Animation();

function stringAnimation(){
var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
    var rect = string.getBoundingClientRect();

    var x = dets.clientX - rect.left;
    var y = dets.clientY - rect.top;

    path = `M 10 100 Q ${x} ${y} 990 100`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.2,
        ease: "elastic.out(1,0.2)"
    });
});
}
stringAnimation();

function slidesAnimation(){
  function SwipperJs(){
 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1200, // smooth transition
  grabCursor: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
       touchRatio: 1.8, // smooth swipe
       resistanceRatio: 0.85,

  observer: true,
  observeParents: true,
    });
  }
  SwipperJs();
  
}
slidesAnimation();




function loaderAnimation(){
  let tl=gsap.timeline()

tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1,
})
tl.to("#loader h3",{
  x:-10,
  opacity:0,
  duration:1,
  stagger:0.1,
})

tl.to("#loader",{
  opacity:0,
})
tl.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.3,
  delay:-0.5
})
tl.to("#loader",{
  display:"none",
})

}
loaderAnimation();


function footerAnimation(){
// gsap.registerPlugin(ScrollTrigger);
gsap.from("#page6 span",{
  y:120,
  duration:2,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:"top -775%",
    end:"top 30%",
    scrub:2,
    // markers:true
  }
});
}

footerAnimation();


function scrollEffect(){
gsap.to("#page7 h1",{
  x:"-170%",
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    start:"top top",
    end:"+=800%",
    scrub:3,
     pin:true,
      anticipatePin:1 
  }
})
}
scrollEffect();
ScrollTrigger.refresh(); 