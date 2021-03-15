document.querySelector(".image").addEventListener("click" , function (){
    document.querySelector(".toggle").style = "display: block";
    document.querySelector(".image").style = "display: none"
    document.querySelector(".image2").style = "display: block"
})

document.querySelector(".image2").addEventListener("click" , function (){
    document.querySelector(".toggle").style = "display: none";
    document.querySelector(".image").style = "display: block"
    document.querySelector(".image2").style = "display: none"
})