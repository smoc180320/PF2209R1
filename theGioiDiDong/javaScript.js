//--------------------Form popup--------------------------
const addressbtn = document.querySelector("#address-form");
const addessclose = document.querySelector("#address-close");
// console.log(addressbtn)
addressbtn.addEventListener("click", function(){
    document.querySelector(".address-form").style.display = "flex"
})
addessclose.addEventListener("click", function(){
    document.querySelector(".address-form").style.display = "none"
})
// --------slider----------------
const rightBtn = document.querySelector(".bi-caret-right-fill")
const leftBtn = document.querySelector(".bi-caret-left-fill")
const imgNumber = document.querySelectorAll(".slider-content-left-top img")
let index = 0
rightBtn.addEventListener("click", function(){
    index = index + 1
    if (index > imgNumber.length-1) {
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index*100 + "%"
})
leftBtn.addEventListener("click", function(){
    index = index - 1
    if (index <= 0) {
        index = imgNumber.length -1
    }
    document.querySelector(".slider-content-left-top").style.right = index*100 + "%"
})
// ---------------------------------------------slide sub--------------------------------------------
function removeActive() {
    let imgActive  = document.querySelector(".active")
    imgActive.classList.remove("active")
}
const imgNumberSub = document.querySelectorAll(".slider-content-bottom li")
imgNumberSub.forEach(function(image,index){
    
    image.addEventListener("click",function(){
        removeActive()
        document.querySelector(".slider-content-left-top").style.right = index*100 + "%"
        image.classList.add("active")   
    })
})
//----------------------------------------------slide moving---------------------------------------------------------
function imgAuto() {
    index = index + 1
    if (index > imgNumber.length-1) {
        index = 0
    }
    removeActive()
    document.querySelector(".slider-content-left-top").style.right = index*100 + "%"
    imgNumberSub[index].classList.add("active")
}
setInterval(imgAuto,3000)
//--------------------slider product-------------------------
const rightBtnTwo = document.querySelector(".bi-caret-right-fill-two")
const leftBtnTwo = document.querySelector(".bi-caret-left-fill-two")
const imgNumberTwo = document.querySelectorAll(".silder-product-one-content-items")
rightBtnTwo.addEventListener("click", function(){
    index = index + 1
    if (index > imgNumberTwo.length-1) {
        index = 0
    }
    document.querySelector(".silder-product-one-content-items-content").style.right = index*100 + "%"
})
leftBtnTwo.addEventListener("click", function(){
    index = index - 1
    if (index <= 0) {
        index = imgNumberTwo.length - 1
    }
    document.querySelector(".silder-product-one-content-items-content").style.right = index*100 + "%"
})
