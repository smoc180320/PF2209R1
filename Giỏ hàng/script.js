//------------Select Product-------------
const btn = document.querySelectorAll("button");
 
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        let btnItem = event.target
        let product = btnItem.parentElement
        let productImg = product.querySelector("img").src
        let productName = product.querySelector("H1").innerText
        var productPrice = product.querySelector("span").innerText
        // console.log(productPrice,productImg,productName)
        addcart(productPrice,productImg,productName)

    }})
})
//----------------Thêm vào giỏ hàng----------------
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
    let trContent = '<tr><td style="display:flex;align-items: center;"><img style="width:70px" src="'+productImg+'" alt=""><span class="title">'+productName+'</span>'+productName+'</td><td><span class="price">'+productPrice+'</span><sup>đ</sup></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addTr.innerHTML = trContent
    let cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addTr)
    cartTotal()
    deleteCart()
}
//--------------Total-Price---------------
function cartTotal(){
    let cartItem = document.querySelectorAll("tbody tr")
    let totalC = 0
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input").value
        let productPrice = cartItem[i].querySelector(".price").innerHTML
        // console.log(inputValue)
        // console.log(productPrice)
        totalA = inputValue*productPrice
        // totalB = totalA.toLocaleString('de-DE')
        // console.log(totalA)
        totalC = totalC + totalA
        // totalB = totalC.toLocaleString('de-DE')
        // console.log(totalC)
    }
    
    let cartTotalA = document.querySelector(".price-total span")
    let cartPrice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}
//--------------Delete---------------
function deleteCart(){
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++){
        let productT = document.querySelectorAll(".cart-delete")
        console.log(productT)
        productT[i].addEventListener("click",function(event){
            let cartDelete = event.target
            let cartItemR = cartDelete.parentElement.parentElement
            console.log(cartItemR)
            cartItemR.remove()
            cartTotal()
        })
       
    }
}
function inputchange(){
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++){
        let inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            cartTotal()
        })
       
    }
}
 const cartBtn = document.querySelector(".fa-xmark")
 const cartShow = document.querySelector(".fa-cart-shopping")
 cartShow.addEventListener("click",function(){
     document.querySelector(".cart").style.right = "0"
 })
 cartBtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})