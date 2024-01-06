let active = 3;
let miniCircle = document.querySelectorAll(".mini-circle")
let sec = document.querySelectorAll(".second")

miniCircle.forEach((val , index)=>{
    val.addEventListener("click" , ()=>{

        gsap.to(".circle" , {
            rotate : (3-(index+1))*10 , 
            ease : Expo.easeInOut ,
            duration : 1
        })

        greyOut();

        gsap.to(val , {
            opacity: .7 ,
        })

        gsap.to(sec[index], {
            opacity : 1
        })
       
    })
})

let greyOut = () => {

    gsap.to(miniCircle , {
        opacity : .2
    })
     
    gsap.to(sec, {
        opacity : .2
    })
}

gsap.to(miniCircle[active-1] , {
    opacity : .7
})

gsap.to(".circle" , {
    rotate : 0 ,
    ease : Expo.easeInOut ,
    duration : 1
})

gsap.to(sec[active-1], {
    opacity : 1
})

