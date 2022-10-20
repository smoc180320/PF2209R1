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