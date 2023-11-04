let string = ""
let calcDisplay = document.getElementById("calc_display");
let btnBody = document.getElementById("btnDiv");
let btns = document.querySelectorAll(".btn")
btnBody.addEventListener("click",function(event){
    if(event.target.className === "equal"){
        string = eval(string)
        calcDisplay.value = string
    }
    else if(event.target.className==="reset"){
        string = ""
        calcDisplay.value = string
    }
    else{
        string = string + event.target.innerHTML
        calcDisplay.value=string
    }
    
})