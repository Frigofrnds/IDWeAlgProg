var buttonFemale = document.getElementById('buttonFemale')
var rotate = document.getElementById('rotate')
var buttonMale = document.getElementById('buttonMale')
var imagens = [
document.getElementById('iop1') ,document.getElementById('iop2') , document.getElementById('iop3'),document.getElementById('iop4'),
document.getElementById('iop5'), document.getElementById('iop6'), document.getElementById('iop7'),document.getElementById('iop8'),
document.getElementById('iop9') ,document.getElementById('iop10') , document.getElementById('iop11'),document.getElementById('iop12'),
document.getElementById('iop13'), document.getElementById('iop14'), document.getElementById('iop15'),document.getElementById('iop16')
];
var index = parseInt(1)
var indexControle = parseInt(0)

function indexCheckerRight(){
    if(index === 8){
        index= 0;
    };
    if(indexControle === 8){
        indexControle = 0;
    };};

function indexCheckerRightF(){
        if(index === 16){
            index= 8;
        };
        if(indexControle === 16){
            indexControle = 8;
        };
    };

function removeBackground(){
        for(var teste = 0; teste<=15; teste++){
            imagens[teste].removeAttribute("class","selected");
        };

    };
function clickRight(){
    do {
        imagens[indexControle].removeAttribute("class","selected");
        imagens[index].setAttribute("class","selected");
        indexControle++;
        index++;
    }while(index != index);
};
buttonMale.addEventListener("click", function(){
    index = 0;
    indexControle = 7;
    indexCheckerRight();
    removeBackground();
    imagens[7].setAttribute("class","selected");
});

buttonFemale.addEventListener("click", function(){
    index= 8;
    indexControle = 15;
    indexCheckerRightF();
    removeBackground();
    imagens[15].setAttribute("class","selected");
});
rotate.addEventListener("click", function(){
    clickRight();
    indexCheckerRight();
    indexCheckerRightF();
});



let time = 2500,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected2")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected2")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)

