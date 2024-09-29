let imageBox = document.querySelector('.imgBox');
let qr = document.querySelector(".qrImg");
let input = document.querySelector("input[type='text']");
let btn = document.querySelector("button");
let how = document.querySelector(".how");
function generateQR(){
    if (input.value === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Write Something",
    });
    }else {
        let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        qr.src = api;
    }
}

function howToUse(){
        Swal.fire({
            text: "Enter Text Or URL In Input Field Then Click Generate QR Code Button Then Scan The QR Code With Your Smartphone Or Computer. Enjoy!",
            
            icon: "question"
        });
        
};
