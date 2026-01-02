const display=document.getElementById("display");
const button=document.querySelectorAll("button");

let expression="";

button.forEach(button=>{
    button.addEventListener("click",()=>{
        const value=button.textContent;

        if(value==="AC"){
            expression="";
            display.value="";
        }
        else if(value==="="){
            try{
                expression=eval(expression);
                display.value=expression;
            }catch{
                display.value="Error";
                expression="";
            }
        }else{
            expression +=value;
            display.value=expression;
        }
    });
});
button.addEventListener("click",() => {});
expression += value;
eval(expression);
