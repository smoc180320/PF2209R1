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
const rightBtn = document.querySelector(".bi-chevron-left")
const leftBtn = document.querySelector(".bi-chevron-right")
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
// -------------------------------------Thêm vào giỏ hàng----------------------------------------
// chọn các nội dung của sản phẩm (tên, ảnh, giá)
const btn = document.querySelectorAll(".addCartBuying");
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        let btnItem = event.target    //chọn đúng phần tử
        let product = btnItem.parentElement
        let productInfor = product.parentElement
        let productImg = productInfor.querySelector("a img").src
        let productName = product.querySelector(".name-product").innerText
        var productPrice = product.querySelector("span").innerText
        // console.log(productPrice,productImg,productName)
        addcart(productPrice,productImg,productName)

    }})
})
//Thêm hàng vào giỏ
function addcart(productPrice,productImg,productName){
    let addTr = document.createElement("tr")
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++){
        let productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    let trContent = '<tr><td style="display:flex;align-items: center;"><img style="width:70px" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><span class="price">'+productPrice+'</span><sup>đ</sup></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addTr.innerHTML = trContent //nội dung trong thẻ tr được gán trong HTML
    let cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addTr) //thêm thẻ tr vào dưới cùng
    cartTotal()
    deleteCart()
}
//--------------Total-Price---------------
function cartTotal(){
    let cartItem = document.querySelectorAll("tbody tr")
    let totalC = 0
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input").value
        let productPrices = cartItem[i].querySelector(".price").innerHTML
        let productPrice = (productPrices.replace(".","")).replace(".","")
        totalA = inputValue*productPrice
        totalB = totalA.toLocaleString('de-DE')
        // console.log(totalA)
        totalC = totalC + totalA
        totalB = totalC.toLocaleString('de-DE')
        // console.log(totalC)
        document.getElementById("total-item").innerHTML = "("+cartItem.length+")";
    }
    
    let cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}
//--------------Delete---------------
function deleteCart(){
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++){
        let productR = document.querySelectorAll(".cart-delete")
        // console.log(productR)
        productR[i].addEventListener("click",function(event){
            let cartDelete = event.target
            let cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            cartTotal()
        })
       
    }
}
function inputchange(){
    let cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem)
    for (let i = 0; i < cartItem.length; i++){
        let inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            cartTotal()
        })
       
    }
}

const cartBtn = document.querySelector(".fa-xmark")
const cartShow = document.querySelector(".fa-cart-shopping")
//show cart
cartShow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
})
// ẩn cart
cartBtn.addEventListener("click",function(){
   document.querySelector(".cart").style.right = "-100%"
})