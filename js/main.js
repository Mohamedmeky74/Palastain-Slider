var myImgs = Array.from(document.querySelectorAll(".item img"))
var lightBoxContainer = document.querySelector("#lightBoxContainer")
var lightBox =document.querySelector("#lightBox")
var closIcone = document.querySelector("#closeIcon")
var nextElement = document.querySelector("#nextElement")
var previousElement = document.querySelector("#previousElement")
var selectedImgSrc
var index


for(var i =0 ;i<myImgs.length;i++){
    myImgs[i].addEventListener("click", function(event){
        selectedImgSrc = event.target.getAttribute("src")
        console.log(selectedImgSrc);
        lightBox.style.backgroundImage = `url(${selectedImgSrc})`
        lightBoxContainer.classList.replace("d-none","d-flex")
        index = myImgs.indexOf(event.target)
        console.log(index);
        
    })
    
}


closeIcon.addEventListener("click",closingLightBox )
nextElement.addEventListener("click" , showNextElement)
previousElement.addEventListener("click" , showPreviousElement)
document.addEventListener("keyup", function(event){
    if(lightBoxContainer.classList.contains("d-flex")){
         switch (event.key) {
    case "Escape":
        closingLightBox()
        break;
    case "ArrowRight":
        showNextElement()
        break;
    case "ArrowLeft":
        showPreviousElement()
        break;

    default:
        break;
    }
   
}
})
lightBoxContainer.addEventListener("click",function(event){
    if(event.target != lightBox && event.target != previousElement && event.target != nextElement){
        closingLightBox()
    }
})







function closingLightBox(){
    lightBoxContainer.classList.replace("d-flex","d-none")

}
function showNextElement (){
    index+=1 
    if (index >= myImgs.length) index = 0
    selectedImgSrc = myImgs[index].getAttribute("src")
    lightBox.style.backgroundImage = `url(${selectedImgSrc})`
}
function showPreviousElement (){
    index-=1 
    if (index < 0) index = myImgs.length -1
    selectedImgSrc = myImgs[index].getAttribute("src")
    lightBox.style.backgroundImage = `url(${selectedImgSrc})`
}

