window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.transition="1s";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},2000);

});
