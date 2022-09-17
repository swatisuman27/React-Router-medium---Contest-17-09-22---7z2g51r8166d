import React from "react";


export const Calculator = () =>{

    let url_string = window.location.href;
    var url = new URL(url_string);

    var num1 = Number(url.searchParams.get("num1"));
    var num2 = Number(url.searchParams.get("num2"));
    var op = url.searchParams.get("op");
    console.log(num1, num2, op);
    let answer = 0;
    console.log(op);
    switch(op){
        case "+": {answer = num1 + num2; break;}
        case "-": {answer = num1 - num2; break;}
        case "*": {answer = num1 * num2; break;}
        case "/": {answer = num1 / num2; break;}
        case "%": {answer = num1 % num2; break;}
    }

    return(
        <div>
        Your calculation Result is <span id="calc-result">{answer}</span>
        </div>        
    )
}
