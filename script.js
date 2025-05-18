function add(a,b){
    return parseInt(a)+parseInt(b);
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

let num1='';
let num2='';
let operator='';

function operate(num1,num2,operator){
    if(operator=="+"){
     return add(num1,num2);  
    }
    if(operator=="-"){
     return sub(num1,num2);  
    }
    if(operator=="*"){
     return multiply(num1,num2);  
    }
    if(operator=="/"){
     return divide(num1,num2);  
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
        disp.innerHTML=bt.innerHTML;
        operatorTaken=false;      
      }
      if(operatorTaken=false){
        disp.innerHTML+=bt.innerHTML;
      }
      
});
})


}

displayNum();

let equals=document.querySelector(".eq");
equals.addEventListener("click", function() {
 
  console.log(num1);
  console.log(num2);
});

let clr=document.querySelector(".clear");
clr.addEventListener("click",function(){

  disp.innerHTML=0;
   num1='';
   num2='';
   operator='';
});
