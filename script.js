function add(a,b){
    let ans= a+b;
    return Math.round(ans*100)/100;
}

function sub(a,b){
    let ans= a-b;
    return Math.round(ans*100)/100;
}

function multiply(a,b){
    let ans= a*b;
    return Math.round(ans*100)/100;
}

function divide(a,b){
    let ans= a/b;
    return Math.round(ans*100)/100;
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
let num2Taken=false;
let operatorTaken=false;
let rec=false;
let eqClicked=false;
const disp=document.querySelector(".display");

function displayNum(){

const btn=document.querySelectorAll(".digit");
btn.forEach(bt=>{
    bt.addEventListener("click",btn=> {

        if(eqClicked==true){
          disp.innerHTML=bt.innerHTML;
            eqClicked=false;
          num1='';
          num2='';
          operator='';
          num1Taken=false;
          num2Taken=false;
          operatorTaken=false;
          rec=false;
        }
        else if(disp.innerHTML==0){
            disp.innerHTML=bt.innerHTML;
        }
        else{
            disp.innerHTML+=bt.innerHTML;
        }

        if(operatorTaken==false){
        num1+=bt.innerHTML;
        }
        
        num1Taken=true;
      
});
})



const op=document.querySelectorAll(".oper");
op.forEach(op=>{
op.addEventListener("click", function(){
  if(num1Taken==true && num2Taken==false){
    operator=op.innerHTML;
    operatorTaken=true;
    rec=true;
  }

  if(num1Taken==true && num2Taken==true){
    disp.innerHTML=operate(parseInt(num1),parseInt(num2),operator);
    num1=disp.innerHTML;
    num2='';
    operator=op.innerHTML;
    rec=true;
  }
})
})

btn.forEach(bt=>{
    bt.addEventListener("click",btn=> {
      if(rec==true){     
        disp.innerHTML=bt.innerHTML;
        rec=false;      
      }
      if(rec=false){
        disp.innerHTML+=bt.innerHTML;
      }
      if(operatorTaken==true){
        num2+=bt.innerHTML;
        num2Taken=true;
      }
      
      
});
})


}

displayNum();

let equals=document.querySelector(".eq");
equals.addEventListener("click", function() {
  if(num1Taken==true && num2Taken==true && operatorTaken==true){
  disp.innerHTML=operate(parseInt(num1),parseInt(num2),operator);
  }
  eqClicked=true;
});

let clr=document.querySelector(".clear");
clr.addEventListener("click",function(){

  disp.innerHTML=0;
   num1='';
   num2='';
   operator='';
   num1Taken=false;
   num2Taken=false;
   operatorTaken=false;
   rec=false;
});
