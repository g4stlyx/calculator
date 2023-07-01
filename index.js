const numbers = document.querySelectorAll(".number")
const operations = document.querySelectorAll(".operation")
const screen = document.getElementById("screen")

function handleClick(event){
    screen.value += event.target.innerHTML
}

function handleOperationClick(event){
    if(screen.value===""){
        return;
    }

    if(screen.value.charAt(screen.value.length-1)==="."){
        return;
    }
    if(screen.value.charAt(screen.value.length-1)==="*"){
        return;
    }
    if(screen.value.charAt(screen.value.length-1)==="/"){
        return;
    }
    if(screen.value.charAt(screen.value.length-1)==="+"){
        return;
    }

    screen.value += event.target.innerHTML
}

for(i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click", handleClick)
}

for(i=0;i<operations.length;i++){
    operations[i].addEventListener("click", handleOperationClick)
}

