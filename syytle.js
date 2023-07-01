const buyBtns = document.querySelectorAll('.js-buy-tiket')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.js-modal-close')
const tbfinish = document.querySelector('.tb')


// hàm mở 
function showBuyTicket(){
    modal.classList.add('open')
}
// đống tab 
function cloesBuyTicket(){
    var close2= modal
    close2 = confirm(" Bạn muốn đóng tab") 
    if(close2 == true){
      modal.classList.remove('open')
                                                                             
    }
    else{
     modal.classList.add('open')
        
    }
    
}
// thông báo 
function tbthanhcong(){
    alert("đặt hàng thành công")
    modal.classList.remove('open')
}
// phần header của mobile


for(const new_buyBtn of buyBtns){
    // lắng nghe click người dùng
    new_buyBtn.addEventListener('click',showBuyTicket )
}
modalClose.addEventListener('click',cloesBuyTicket)
tbfinish.addEventListener('click',tbthanhcong)

var header = document.getElementById('header')
var mobile = document.getElementById('click-mobile-menu')
var lenghtHeader = header.clientHeight;
mobile.onclick = function(){
    var isclose = header.clientHeight == lenghtHeader;
    if(isclose){
        header.style.height = "auto";
    }
    else{
        header.style.height = null;
    }
}
// tự động đống menu
var items = document.querySelectorAll('#nav li a[href *="#"]');
for (var i = 0 ; i < items.length ; i++){
    var item = items[i];
    item.onclick = function(){
        var isparenMenu = this.nextElementSibling &&  item.nextElementSibling.classList.contains('sub_nav');
        if(isparenMenu){
            Event.preventDefault();
        }
        else{
            header.style.height = null;
        }
    }
  

}

