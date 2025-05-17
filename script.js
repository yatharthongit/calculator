function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let num1;
let num2;
let operator;

function operate(num1,num2,operator){
    if(operator=="+"){
      add(num1,num2);  
    }
    if(operator=="-"){
      sub(num1,num2);  
    }
    if(operator=="*"){
      multiply(num1,num2);  
    }
    if(operator=="/"){
      divide(num1,num2);  
    }
}

let num1Taken=false;
let operatorTaken=false;
const disp=document.querySelector(".display");

function displayNum(){

const btn=document.querySelectorAll(".digit");
btn.forEach(bt=>{
    bt.addEventListener("click",btn=> {
        if(disp.innerHTML==0){
            disp.innerHTML=bt.innerHTML;
        }
        else{
            disp.innerHTML+=bt.innerHTML;
        }
        num1Taken=true;
});
})
num1 =parseInt(disp.innerHTML);

const op=document.querySelectorAll(".oper");
op.forEach(op=>{
op.addEventListener("click", function(){
  if(num1Taken==true){
    operator=op.innerHTML;
    operatorTaken=true;
  }
})
})

btn.forEach(bt=>{
    bt.addEventListener("click",btn=> {
      if(operatorTaken==true){
        
        disp.innerHTML=8;
  
        
      }
});
})
}

displayNum();

let clr=document.querySelector(".clear");
clr.addEventListener("click",clr=>disp.innerHTML=0);
