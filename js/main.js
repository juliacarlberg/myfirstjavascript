let saveButton=document.getElementById("saveUser");
saveButton.addEventListener("click", save);

let writeAnswer=document.getElementById("answer");
let typeOne=document.getElementById("one");
let typeTwo=document.getElementById("two");
let sendResult=document.getElementById("send");
let writeResult=document.getElementById("result");

function save(){
    writeAnswer.innerHTML="Du klickade på knappen";
}

typeOne.innerHTML=5;
typeTwo.innerHTML=7;

sendResult.addEventListener("click", hit);

function hit(){
 writeResult.innerHTML=5+7;
}



