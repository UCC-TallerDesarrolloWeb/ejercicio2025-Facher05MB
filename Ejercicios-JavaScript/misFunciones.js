/**
 * convierte las unidades ingresadas por el usuario
 * @method convertirUnidades
 * @param {string} unidad - unidad de valor ingresada: metro pie pulgada
 * @param {number} valor - numero de la unidad antes dicho 
 * @return Valor que retorna
 */

function conversor(unidad,valor){

    let metro, pie ,pulgada, yarda



    console.log(valor);
    console.log(isNaN(valor))

    if (isNaN(valor)){
     alert ("el valor no es aceptado")
        metro= " ";
        pie= " ";
        pulgada= " ";
        yarda= " ";
    }
    else{
     if(unidad == "unid_metro"){
        metro = valor;
        pie= 3.28 * metro;
        pulgada= 39.37 * metro;
        yarda= 1.0936 * metro ;


        
    }
    else if(unidad == "unid_pie"){
        pie = valor;
        metro= 0.3048 *  pie;
        pulgada= 12 *pie;
        yarda= 0.333 *  pie ;

    
    }
    else if(unidad == "unid_yarda"){
        yarda = valor;
        metro= 0.9144 *  yarda;
        pulgada= 36 *yarda;
        pie= 3 *  yarda ;

    }
      else if(unidad == "unid_pulgada"){
        pulgada = valor;
        metro= 0.0254 *  pulgada;
        yarda=  0.027778 * pulgada;
        pie= 0.08333 *  pulgada ;

    }
    }

   
    document.getElementById("metro").value = metro;
    document.getElementById("pie").value = pie;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("yarda").value = yarda;
}


/**
 * convierte grados a radienes y vicebersa
 * @method convertirUnidades
 * @param {string} unidad - grados o radianes
 * @param {number} valor - numero de la unidad antes dicho 
 * @return Valor que retorna
 */

let convertirGR = (id,valor) => {
    let cantGrados, cantRadianes;
    if(id == "grados"){
        cantGrados = valor;
        cantRadianes = cantGrados*Math.PI/180;
        document.getElementById("radianes").value = cantRadianes;
    }else
    {
        cantRadianes = valor;
        cantGrados = cantRadianes*180/Math.PI;
        document.getElementById("grados").value = cantGrados;
    }
}