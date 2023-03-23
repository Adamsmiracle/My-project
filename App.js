
const navMenu = document.querySelector(".menu")
const closeBtn = document.querySelector(".close")
const navWrapper = document.querySelector(".nav")

navMenu.addEventListener("click", () => {
    navWrapper.classList.add("show-nav")
    console.log('one');
})

closeBtn.addEventListener("click", () => {
    navWrapper.classList.remove("show-nav")
})

const image = document.querySelector(".content-image")

window.addEventListener("resize", function () {
    if (window.innerWidth > 620) {
        image.src = './images/image-web-3-desktop.jpg'
    }
    else {
        image.src = './images/image-web-3-mobile.jpg'
    }
})