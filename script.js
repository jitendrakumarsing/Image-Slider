let index =0;
let angle=0;
let images = document.getElementsByClassName("slide");
let rightbtn=document.getElementById('rightbtn');
let leftbtn=document.getElementById('leftbtn');
let indexNo = document.getElementById('indexno');
let spinner =document.getElementById('spinner');
let bottomleftbtn= document.getElementById('bottomleft');
let bottomrightbtn= document.getElementById('bottomright');
let Rotate = document.getElementById('rotate');

slider(index)

// ----Next----
bottomrightbtn.addEventListener('click',next);
rightbtn.addEventListener('click',next);
function next(){
    if(index+1<images.length ||index+1 !== images.length){
    index= index+1;
}
else{
    index=0;
}
slider(index);
}

// ----Previous----
bottomleftbtn.addEventListener('click',previous);
leftbtn.addEventListener('click',previous);
function previous(){
    if (index>0) {
        index=index-1;
    }
    else if(index==0){
        index=images.length-1;
    }
        slider(index);
}
// ----display none----
function None() {
    for (x of images) {
     x.style.display='none';
    } 
 }
// ---To display block---
function slider(index) {
    None();
    images[index].style.display='block' 
    indexNo.innerHTML= `${index+1}`+"/"+`${images.length}`;
    images[index].style.transform = 'rotate(0deg)';
    images[index].classList.remove("slidetoggle");
}   
// -----Rotate image----
Rotate.addEventListener('click',rotate);
function rotate() {
    angle= angle + 90;
    images[index].classList.toggle("slidetoggle");
    images[index].style.transform = `rotate(${angle}deg)`;
}