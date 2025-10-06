let calcularSuma = () => {
    var num1,num2;

    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);

    if(isNaN(num1) || isNaN(num2)){
        alert("una de las variables ingresadas no es numerica")
    } else{
         document.getElementsByName("sum_total")[0].value = num1 + num2;
    }

}

let calcularResta = () =>{
    var num1,num2;

    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);

    if(isNaN(num1) || isNaN(num2)){
        alert("una de las variables ingresadas no es numerica")
    } else{
         document.getElementsByName("res_total")[0].value = num1 - num2;
    }

}

let calcularMultiplicacion = () => {
    var num1,num2;

    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number(document.getElementsByName("mul_num2")[0].value);

    if(isNaN(num1) || isNaN(num2)){
        alert("una de las variables ingresadas no es numerica")
    } else{
         document.getElementsByName("mul_total")[0].value = num1 * num2;
    }

}

let calcularDivision = () =>{
    var num1,num2;

    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=Number(document.getElementsByName("div_num2")[0].value);

    if(isNaN(num1) || isNaN(num2)) {
        alert("una de las variables ingresadas no es numerica")
    } else{
        if(num2 === 0){
            alert("no podes divir por 0")
        }else{
            document.getElementsByName("div_total")[0].value = num1 / num2;
        }
    }

}


        