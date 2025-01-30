function upDate(imgElement){
    document.getElementById('box').innerHTML = imgElement.alt;
    document.getElementById('box').style.backgroundImage = `url('${imgElement.src}')`; 
}
function unDo(){
    document.getElementById('box').innerHTML = line;
    document.getElementById('box').style.backgroundImage = "none";
}
var line = "Hover over an image below to display here";