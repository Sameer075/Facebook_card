var btn=document.querySelector("#btn");
var istatus=document.querySelector("h5");
var  clicked=0
btn.addEventListener("click", function(){
    if(clicked===0){
    istatus.innerHTML="Friends";
    istatus.style.color="Green";
    btn.innerHTML="Remove Friend";
    
    clicked=1
    }
    else{
        istatus.innerHTML="Strenger";
        istatus.style.color="red";
        btn.innerHTML="Add Friend";
        clicked=0
    }
})