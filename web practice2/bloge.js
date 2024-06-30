let mode = document.querySelector("button");
let v = "white";

mode.onclick=()=>{
    if (v==="white") {
        v="black";
      body=document.querySelector("body");
body.setAttribute("class", "black");
// document.querySelector(".second").style.color="black"; 
// document.querySelector(".second0").style.color="black";
// document.querySelector(".second1").style.color="black";
// document.querySelector(".second2").style.color="black";
// document.querySelector(".second3").style.color="black";
// document.querySelector(".second4").style.color="black";
// document.querySelector(".second5").style.color="black";
// document.querySelector(".second6").style.color="black";
// document.querySelector(".second7").style.color="black";
// document.querySelector(".second8").style.color="black";
// document.querySelector(".second9").style.color="black";
// document.querySelector(".second10").style.color="black";

    } else if(v==="black"){
        v="white";
        body=document.querySelector("body");
        body.setAttribute("class", "white");  
       
    }
}


