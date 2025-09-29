

const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-manos.webp",
  },
];

 function mostrardetalle(id) {
  const prod = productos[id];

  document.getElementById("titulo_prod").innerText = prod.nombre;
  document.getElementById("descr-prod").innerText = prod.description;
  document.getElementById("precio-prod").innerText = `$${prod.precio}`;

  document.getElementById("detalle").showModal(); // usa el <dialog>
}

function cerrarmodal() {
  document.getElementById("detalle").close();
}

const mostrarCatalogo = (prod = productos) => {
  let contenido = "";

  prod.forEach((item, i) => {
    contenido += `
      <div class="producto">
        <img src="images/${item.imagen}" alt="${item.nombre}" />
        <h3>${item.nombre}</h3>
        <p>Precio: $${item.precio}</p>
        <button type="button" onclick="mostrardetalle(${i})">Ver detalle</button>
        <button type="button" onclick="agregar_al_carrito(${i})">Agregar al carrito</button>
      </div>
    `;
  });

  document.getElementById("catalogo").innerHTML = contenido;
};





let agregar_al_carrito= (id)=> {
  let listadoProductos;

const listadoInicial = JSON.parse(localStorage.getItem("carrito"));


if(listadoInicial == null){
  listadoProductos = [];
}else{
  listadoProductos = listadoInicial;
  
}

listadoProductos.push(id);
  localStorage.setItem("carrito", JSON.stringify(listadoProductos));







}



let mostrarCarrito = () =>{
  let contenido= "";
  const carrito = JSON.parse(localStorage.getItem("carrito"));

  carrito .forEach((num) => {
    contenido += `
      <div class="producto">
        <h3> ${productos[num].nombre} </h3>
        <p> ${productos[num].precio} </p>
      </div>
    `;

});
document.getElementById("carrito").innerHTML = contenido;

/*if (carrito.length> 0 ){
  localStorage.setItem"carrito",JSON.stringify(carrito)
} else {
localStorage.removeItem("carrito")
}*/






}

let filtrarProducto = () =>{
  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("price-min").value;
  let max = document.getElementById("price-max").value;



  let prot = document.getElementById("protectores").Checked;
  let entr = document.getElementById("entrenamiento").Checked;
  let dob = document.getElementById("dobok").Checked;




  let marca  = document.getElementById("Marca").value;


  let newlista=productos;

  newlista = newlista.filter( (prod) =>
  prod.nombre.toLowerCase().includes(searchWord.toLowerCase() ) 
  || prod.description.toLowerCase().includes(searchWord.toLowerCase() )
  );




  if(min){
    newlista = newlista.filter((prod) => prod.precio >= min);
  }

  
  if(max){
    newlista = newlista.filter((prod) => prod.precio <=max);
  }



  let category = [];

  prot ? category.push("Protectores"):"";
  entr ? category.push("Entrenamiento"): "";
  dob ? category.push("Dobok"):"";

  if(category.length >0 ) {
    newlista = newlista.filter((prod) => category.includes(prod.categoria));
  }

  if (marca != "Todas"){
    newlista = newlista.filter((prod) => prod.marca == marca);
  }


  mostrarCatalogo(newlista);



};


let formatPrice = (price) => {

  const numberFormat = new Intl.NumberFormat("es-AR",{
    currency: "ARS",
    style: "currency",});
    return numberFormat.format(price);  

  
}





