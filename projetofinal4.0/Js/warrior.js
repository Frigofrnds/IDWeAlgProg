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

var buttonHabilidade1 = document.getElementById('habilidade01');
var buttonHabilidade2 = document.getElementById('habilidade02');
var buttonHabilidade3 = document.getElementById('habilidade03');
var buttonHabilidade4 = document.getElementById('habilidade04');
var buttonHabilidade5 = document.getElementById('habilidade05');
var buttonHabilidade6 = document.getElementById('habilidade06');
var indexHabilidades =[
    document.getElementById('item1Contexo'),document.getElementById('item2Contexo'),document.getElementById('item3Contexo'),
    document.getElementById('item4Contexo'),document.getElementById('item5Contexo'),document.getElementById('item6Contexo')
];


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


function removeClassHab(){
    for(var teste = 0; teste<=5; teste++){
        indexHabilidades[teste].removeAttribute("class","selected3");
    };
    for(var teste = 0; teste<=5; teste++){
        indexHabilidades[teste].setAttribute("class","trocaContexto");
    };

}
buttonHabilidade1.addEventListener("click", function(){
    removeClassHab();
    indexHabilidades[0].setAttribute("class","selected3")
});

buttonHabilidade2.addEventListener("click", function(){
    removeClassHab();
    indexHabilidades[1].setAttribute("class","selected3")
});

buttonHabilidade3.addEventListener("click", function(){
    removeClassHab();
    indexHabilidades[2].setAttribute("class","selected3")
});

buttonHabilidade4.addEventListener("click", function(){
    removeClassHab();
    indexHabilidades[3].setAttribute("class","selected3")
});

buttonHabilidade5.addEventListener("click", function(){
    removeClassHab();
    indexHabilidades[4].setAttribute("class","selected3")
});

buttonHabilidade6.addEventListener("click", function(){
    removeClassHab();
    indexHabilidades[5].setAttribute("class","selected3")
});

