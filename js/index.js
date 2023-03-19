

var mymo = document.getElementById("mo");
document.addEventListener("mousemove", function (e) {



    mymo.style.left = e.clientX
    mymo.style.top = e.clientY

})

var myImg = Array.from(document.querySelectorAll(".item img"));
var lightconti = document.querySelector(".light");
var closee = document.getElementById("close");
var left = document.getElementById("left");
var right = document.getElementById("right");

var currentImageIndex = 0;


for (i = 0; i < myImg.length; i++) {

    myImg[i].addEventListener("click", show)



}
closee.addEventListener("click", hidefd)
right.addEventListener("click", goNext)
left.addEventListener("click", goPrev)
function show(e) {

    lightconti.style.display = "flex";
    var myScr = e.target.src;
    lightconti.firstElementChild.style.backgroundImage = "url(" + myScr + ")"

}

function hidefd() {

    lightconti.style.display = "none";
}

function goNext()
{
    currentImageIndex++;//1

    if(currentImageIndex == myImg.length)
    {
        currentImageIndex = 0;
    }

    lightconti.firstElementChild.style.backgroundImage = "url(" + myImg[currentImageIndex].src + ")";

}
function goPrev()
{
    currentImageIndex--;
    if(currentImageIndex < 0)
    {
        currentImageIndex = myImg.length - 1;
    }

    lightconti.firstElementChild.style.backgroundImage = "url(" + myImg[currentImageIndex].src + ")";

}
document.addEventListener("keydown" , function(e){

    if(e.keyCode == 39)// at2kd eno das sahm ymeen
    {
        goNext();
    }
    else if(e.keyCode == 37)
    {
        goPrev();
    }
    else if(e.keyCode == 27)
    {
        hidefd();
    }
})

