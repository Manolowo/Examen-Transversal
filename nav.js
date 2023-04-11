function openNav(){
    document.getElementById("mobile_menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile_menu").style.width = "0%";
}

document.getElementById("button-addon2").onclick = function(){
    alert("Correo recibido, le contactaremos en breves")
}
document.getElementById("Comprar").onclick = function(){
    alert("La página se redigirá al sitio web (WebPay) para proceder al pago")
}
