console.log("hello calculator");
var buttons=document.getElementsByTagName("span");
var display=document.getElementById("screen");
var screenValue='';
// display.addEventListener('mouseover',function(){     //just for checking that  am i doing correct steps aur everything is fine
//     console.log("key pressed");
// })
// display.addEventListener('mouseout',function(){
//     console.log("mouseout");                        //same as above
// })

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        let buttonText=this.innerHTML;
        console.log("clicked", buttonText);
        if(buttonText=='+'){       //if an operator is clicked
            buttonText='+';
            screenValue+=buttonText;    //for fetchiong the operand or it will giv u operand1
            display.value=screenValue;
        }else if(buttonText=='='){
            screenValue=eval(screenValue);
            display.value=screenValue;
            // operand2=parseFloat(display.textContent);//use eval to get result// show result on dispaly
        }else if(buttonText=='C'){
            screenValue="";
            display.value=screenValue;
        }
            else{
            screenValue+=buttonText;
            display.value=screenValue;
        }
    });
}