

window.onload = function(){
//filters

let brightness = 100;
let hue = 1;
let grayscale = 1;
let invert = 1;
let blur = 0;
let contrast = 100;
let sepia = 1;
let saturate = 1;

const akrange = document.querySelector("#range-ak");
const btrange = document.querySelector("#range-bt");
const grrange = document.querySelector("#range-gr");
const invrange = document.querySelector("#range-inv");

const blurrange = document.querySelector("#range-blur");
const sepiarange= document.querySelector("#range-sepia");
const contrastrange= document.querySelector("#range-contrast");
const saturaterange = document.querySelector("#range-saturate");

const ak = document.querySelector("#hue");
const bt = document.querySelector("#bt");
const gs = document.querySelector("#gr");
const inv = document.querySelector("#invert");
const bl = document.querySelector("#blur");
const sp = document.querySelector("#sepia");
const cn = document.querySelector("#contrast");
const st = document.querySelector("#saturate");

const mytools = document.querySelector(".img-tools");
const addbgbtn = document.querySelector(".addbgbtn");
const addtextbtn = document.querySelector("#addtextbtn");
const option = document.querySelector('#select');

const input = document.querySelector("#textItem");

const range= document.querySelector("#range");

const closeTools = document.querySelector(".closeTools");

const myimg = document.querySelector("#my-image");

const container = document.querySelector(".container");
const imgurlHolder = document.querySelector(".imgurl");

imgurlHolder.addEventListener("click", (myinput) => {
     
     var a = prompt("Enter Image URL only (JPG,PNG,JPEG) else Will Cause Error");
     if(a==0){
     alert("Empty Value");
     }
     else{
     myinput.target.value = a;
            }
})

//add new image via tool
const addImage = document.querySelector('.addnewimage');
addImage.addEventListener("click", function(){

    const urlInput = document.querySelector('.imgurl');
    const newUrl = urlInput.value;
    if(urlInput.value==""){
        alert("Opppsss, Error occupied");
    }
    else{
    myimg.src = newUrl;
    myimg.style.display="block"
    }
    urlInput.value ="";
    myimg.style.filter = "none"
})

function imageUpdate() {
myimg.style["-webkit-filter"] = "brightness("+brightness+"%) hue-rotate("+hue+"deg) grayscale("+grayscale+"%) invert("+invert+"%) blur("+blur+"px) sepia("+sepia+"%) saturate("+saturate+"%) contrast("+contrast+"%)";
}

addbgbtn.addEventListener("click", (item) => {
item.preventDefault();

if(option.value == "optionnone"){
    alert("Error !! Mismatched one value");
    myimg.style.border="none"
}
else if(option.value == "redBorder"){
    myimg.style.border= "4px solid #ff2b35";
}
else if(option.value == "greenBorder"){
    myimg.style.border="4px solid #3cff2b";
}
else if(option.value =="pinkBorder"){
    myimg.style.border="4px solid #ff40a8";
}
else if(option.value =="blackBorder"){
    myimg.style.border="4px solid #000";
}
else if(option.value =="blueBorder"){
    myimg.style.border="4px solid #6a78ff";
}
else if(option.value =="grayBorder"){
    myimg.style.border="4px solid #ffffff";
}
else if(option.value =="orangeBorder"){
    myimg.style.border="4px solid #ff7300";
}
else if(option.value =="purpleBorder"){
    myimg.style.border="4px solid #ce2bff";
}
else {
    alert("Value Mismatched")
}   
});

range.addEventListener("input", (item) => {
    const size = range.value;
    myimg.style.opacity = (range.value)/100;
    
});

input.addEventListener("input", (item) => {
    const size = input.value;
    myimg.style.borderRadius = size + "px";
    
});

document.querySelector("#img-input").addEventListener("change", (x) => {

const nImgSrc = myimg.getAttribute("src");
 const newFile = x.target.files[0];
  const oT = document.querySelector(".openTools"); 
   
if(!newFile){
confirm("Image is not selected, Do you want to reset everything ?");
myimg.style.display="none";
document.querySelector("#download").style.display='none';
mytools.classList.remove("show");
document.querySelector(".openTools").remove();
}
else{
const xsrc = URL.createObjectURL(newFile);
myimg.src = xsrc;
myimg.style.display="block";
document.querySelector("#download").style.display='block';
mytools.classList.add("show");
  } 
//if(!nImgSrc){
//    mytools.classList.add("show");
// }
  //download image script 
  // https://codepen.io/MadanBhandari/pen/vbaKGJ
  document.querySelector("#download").addEventListener("click", (event) => {
    event.preventDefault();
    const newFile = x.target.files[0];
    const xsrc = URL.createObjectURL(newFile);
    downloadImage(xsrc)
  });
  function downloadImage(url) {
  
  fetch(url, {
    mode : 'no-cors',
  })
    .then(response => response.blob())
    .then(blob => {
    let blobUrl = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.download = url.replace(/^.*[\\\/]/, '');
    a.href = blobUrl;
    document.body.appendChild(a);
    a.click();
    a.remove();
    console.log("worked")
  });
}
myimg.style.filter = "none";
});
ak.addEventListener("input", () => {
    console.log(ak.value);
    akrange.innerHTML = ak.value+"%";
    hue = ak.value;
    imageUpdate();   
});

bt.addEventListener("input", () => {
    btrange.innerHTML = bt.value+"%";
    brightness = bt.value;
    imageUpdate();
    
});

gs.addEventListener("input", () => {
    grrange.innerHTML = gs.value+"%";
    grayscale = gs.value;
    imageUpdate();
    
});

inv.addEventListener("input", () => {
    invrange.innerHTML = inv.value+"%";
    invert = inv.value;
    imageUpdate();
   
});

bl.addEventListener("input", () => {
    blurrange.innerHTML = bl.value+"px";
    blur = bl.value;
    imageUpdate();
   
});

sp.addEventListener("input", () => {
    sepiarange.innerHTML = sp.value+"%";
    sepia = sp.value;
    imageUpdate();
   
});

cn.addEventListener("input", () => {
    contrastrange.innerHTML = cn.value+"%";
    contrast = cn.value;
    imageUpdate();
   
});

st.addEventListener("input", () => {
    saturaterange.innerHTML = st.value+"%";
    saturate = st.value;
    imageUpdate();
   
});
closeTools.addEventListener("click", function(){
    const span = document.createElement("span");
    span.className ="openTools";
    const spanTxt = document.createTextNode("Open Tools");
    span.appendChild(spanTxt);
    span.addEventListener("click", (x) => {
        mytools.classList.add("show");
        x.target.remove();
    });
    mytools.classList.remove("show");
    document.body.appendChild(span);
});
const dbtn = document.querySelector(".dbtn");

dbtn.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = myimg.naturalWidth;
    canvas.height = myimg.naturalHeight;
    
    ctx.filter = `brightness(${brightness}%) saturate(${saturate}%) invert(${invert}%) grayscale(${grayscale}%)`;
    
    ctx.drawImage(myimg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
});
 

}










