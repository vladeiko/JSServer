window.onload = function() {
    var j = 0;
    var image = document.getElementsByTagName("img");
    var mass = [];
    var test = ["img/i1.jpg", "img/i2.jpg", "img/i3.jpg" , "img/i4.jpg" , "img/i5.jpg"];
    for (var i = 0;i < image.length; i++){
        var newArray = image[i].getAttribute("src");
        if (newArray === test[j]){
            mass[j] = image[i];
            j++;
        }
    }
   setInterval(okey, 6000, image, mass);
};



function okey(image, mass) {
    for (var i = 0;i< mass.length; i++){
         var noneImg = mass[i];
        console.log(noneImg);
         var srcName = noneImg.getAttribute("src");
        
         var time = Math.ceil(Math.random()* 5);
        console.log(time * 1000);
        
        setTimeout(inviz, time * 500, noneImg);
        
         setTimeout(view, time * 1000, noneImg, srcName);
    }
}


function inviz(eventObj){
        eventObj.src = "";
        console.log(eventObj.src = "");
        
}

function view(eventObj, srcName){
        eventObj.src = srcName;
    console.log(eventObj.src = srcName);
}