var imageBox=document.getElementById("imgBox");
var qrImage=document.getElementById("qrImg");
var qrtext=document.getElementById("qrText");

function generateQR(){
    if(qrtext.value.length > 0){
        qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imageBox.classList.add("show-img");
    }else{
        qrtext.classList.add('error');
        setTimeout(()=>{
            qrtext.classList.remove('error');
        },1000);
    }
}