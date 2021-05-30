alert("خوش آمدید!");





var calu = document.getElementById('div-senior'); // نتیجه

function calculator() {
    var number1 = document.getElementById('num1').value; // num1 
    var number2 = document.getElementById('num2').value; // num2
    var character = document.getElementById('char-num').value;

    number1 = parseInt(number1);
    number2 = parseInt(number2);


//     if(number1 == undefined || number2 == undefined)
// {
//     calu.innerHTML = "خالی";
//  }
// if(Num2.value == undefined)
// {
//     calu.innerHTML = "خالی";
// }
 
    

    if (character == '+') {
        var result = number1 + number2;
        calu.innerHTML = result;
    } else if (character == '*') {
        var result = number1 * number2;
        calu.innerHTML = result;
    } else if (character == '-') {
        var result = number1 - number2;
        calu.innerHTML = result;
    } else if (character == '/') {
        var result = number1 / number2;
        calu.innerHTML = result;
    } else if (character == '%') {
        var result = number1 % number2;
        calu.innerHTML = result;
    };
};




function reset() {
    var Num1 = document.getElementById('num1');                
    var Num2 = document.getElementById('num2');     
    var RES  = document.getElementById('div-senior');           //نتیجه


        RES.innerHTML = "نتیجه";

        Num1.value = "";
        Num2.value = "";
    
}


// if(RES.innerHTML == NaN || RES.innerHTML ==  undefined)
// {
//     RES.innerHTML = "بدون مقدار";
// }

if(Num1.value == undefined)
{
    RES.innerHTML = "خالی";
}
if(Num2.value == undefined)
{
    RES.innerHTML = "خالی";
}