/////// CLASE CONSTRUCTORA/////////////////////////////
class Cerveza {
    constructor(id, marca, tipo, formato, volumen, precio,imagen) {
        this.id = id,
        this.marca = marca,
        this.tipo = tipo,
        this.formato = formato,
        this.volumen = volumen,
        this.precio = precio,
        this.imagen = imagen
    }
  
    infoCerveza() {
      console.log(
        `Cervesa: ${this.id}, Marca: ${this.marca} ,Tipo: ${this.tipo} , Formato:${this.formato} ,Volumen:${this.volumen} , Precio: ${this.precio}`
      ); //////METODO///////////////////////////
    }
  }
  
  //////////////////OBJETOS////////////////////////////
  
  const cervesa1 = new Cerveza("H1", "Heineken", "Lager", "porron", "330ml", 220,"HeinekenLager473.jpg");
  
  const cervesa2 = new Cerveza("H2", "Heineken", "Lager", "lata", "473ml", 260,"HeinekenLager473.jpg");
  
  const cervesa3 = new Cerveza("H3", "Heineken", "Lager", "lata", "710ml", 420,"HeinekenLager710.jpg");
  
  const cervesa4 = new Cerveza("G1", "Grolsch", "Ipa", "lata", "473ml", 280,"grolschlPilsnerr473.jpg"); ///lager
  
  const cervesa5 = new Cerveza("G2", "Grolsch", "Lager", "porron", "450", 1540,"grolschlPilsnerr473.jpg");
  
  const cervesa6 = new Cerveza( "I1", "Imperial Golden", "lager","lata", "710",220,"imperialgolden710.jpg");
  
  const cervesa7 = new Cerveza("I2", "Imperial", "Lager", "lata", "473", 220,"imperialLager473.jpg");
  
  const cervesa8 = new Cerveza("I3", "Imperial", "Ipa", "lata", "473", 230,"imperialIPA473.jpg");
  
  const cervesa9 = new Cerveza("I4", "Imperial ", "Apa", "lata", "473", 220,"imperialApa473.jpg");
  
  const cervesa10 = new Cerveza("I5","Imperial", "amberLager", "lata","473",220,"imperialAmberLager2473.jpg");
  
  const cervesa11 = new Cerveza("I6", "Imperial", "Roja", "lata", "473", 220,"imperialRoja473.jpg");
  
  const cervesa12 = new Cerveza("I7","Imperial","Cream Stout","lata","473", 250,"imperialCreamStout473.jpg");
  
  /////INICIALIZACION ARRAY DEPOSITO////////////////////////
  const deposito = [];
  deposito.push(cervesa1,cervesa2,cervesa3,cervesa4,cervesa5,cervesa6,cervesa7,cervesa8,cervesa9,cervesa10,cervesa11,cervesa12);
  console.log(deposito); //OK
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  let divCervezas = document.getElementById("productos")

//////////////////////////////////////////////////////////////////////////////////////////////
function mostrarCatalogo(array){
    
    divCervezas.innerHTML = ""
    array.forEach((marca)=>{
        let nuevaCerveza = document.createElement("div")
        nuevaCerveza.innerHTML = `<div id="${marca.id}" class= "card " style="width: 18rem;">
                                    <img class="card-img-top img-fluid" style="height: 250px;" src="./assets/img/${marca.imagen}"alt="${marca.marca} de ${marca.tipo}">
                                    <div class="card-body  ">                                   
                                        <h4 class="card-title ">${marca.marca}</h4>
                                        <p class="tipoCerv">Tipo: ${marca.tipo}</p>
                                        <p class="precio ">Precio: $ ${marca.precio}</p>                                  
                                        <button class="btn btn-outline-success  btnComp bg-dark" type="submit" ms-3  ">Agregar al carrito</button>
                                    </div>
        </div>`
        divCervezas.append(nuevaCerveza)  
    })

    let btnCompra = document.getElementsByClassName("btnComp")
    for(let compra of btnCompra){
    compra.addEventListener("click", ()=>{
        alert("El producto fue agregado al carrito")
      
    })
}
}

/////////////////////////////////////////////////////////////////////////////////////////////



function ocultarCatalogo(){
    divCervezas.innerHTML = ""
}
// //function agregar Libro
// function nuevoLibro(array){
//     let autorIngresado = prompt("Ingrese el autor")
//     let tituloIngresado = prompt("Ingrese el titulo")
//     let precioIngresado = parseInt(prompt("Ingrese el precio"))
//     let libroCreado = new Libro (estanteria.length+1, autorIngresado, tituloIngresado, precioIngresado)
//     array.push(libroCreado)
    
// }

//function nuevoLibro actualiza a inputs!
// function guardarLibro(array){
//     let autorInput = document.getElementById("autorInput")
//     let tituloInput = document.getElementById("tituloInput")
//     let precioInput = document.getElementById("precioInput")
//     let libroCreado = new Libro (array.length+1, autorInput.value, tituloInput.value, parseInt(precioInput.value), "libroNuevo.jpg")
//     console.log(libroCreado)
//     array.push(libroCreado)
//     console.log(array)
//     //Provisorio resetear form
//     precioInput.value = ""
//     tituloInput.value = ""
//     autorInput.value = ""
//     mostrarCatalogo(array) /// con esto vuelve a cargara el array y muestra el libro agregado
//}
//btnGuardar adjuntamos evento
// let btnGuardar = document.getElementById("guardarLibroBtn")
// btnGuardar.addEventListener("click", ()=>{
//     guardarLibro(deposito)
// })
//BtnMostrarCatalogo adjuntamos evento
// let btnMostrarCatalogo = document.getElementById("verCatalogo")
// btnMostrarCatalogo.addEventListener("click", ()=>{
//     mostrarCatalogo(deposito)
// })
///////////////////////////////////////////////////////////////////////////////////////////

function buscarXtipo() {
  ocultarCatalogo();
  let imputCerv = document.getElementById("imputCerveza").value;
  let tipoCerv = deposito.filter(
    (cervesa) => cervesa.tipo.toLowerCase() == imputCerv
  );
  console.log(tipoCerv);
  
 
  if (tipoCerv == 0) {
    alert("No disponemos de la variedad solicitada");
  } else {
    //alert("Puede visualizar  el resultado de su busqueda en la consola.");
    console.log(`El resultado es el siguiente:`);
    console.log(tipoCerv);

    for (let tipoEncontrado of tipoCerv) {
      tipoEncontrado.infoCerveza();///////se muestra en consola///
    }

    mostrarCatalogo(tipoCerv)
  }
 }
////////////////////////////////////////////////////////////////////////////
function buscarXmarca() {
  ocultarCatalogo();

  let imputCerv2 = document.getElementById("imputCerveza").value;
  let marcaCerv2 = deposito.filter(
    (cervesa) => cervesa.marca.toLowerCase() == imputCerv2
  );
  console.log(marcaCerv2);
  
 
  if (marcaCerv2 == 0) {
    alert("No disponemos de la variedad solicitada");
  } else {
    //alert("Puede visualizar  el resultado de su busqueda en la consola.");
    console.log(`El resultado es el siguiente:`);
    console.log(marcaCerv2);

    for (let tipoEncontrado of marcaCerv2) {
      tipoEncontrado.infoCerveza();///////se muestra en consola///
    }

    mostrarCatalogo(marcaCerv2)
  }
 
 }



///////////////////////////////////////////////////////////////////////////////////////////



let btnMostrarCatalogo2 = document.getElementById("verCatalogo2")
btnMostrarCatalogo2.addEventListener("click", ()=>{
    mostrarCatalogo(deposito)
})




//btn ocultar adjuntamos evento
let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
btnOcultarCatalogo.onclick = ocultarCatalogo



let btnBuscar1 = document.getElementById("btnBuscarM")

btnBuscar1.onclick = buscarXmarca 

let btnBuscar2 = document.getElementById("btnBuscarT")

btnBuscar2.onclick =  buscarXtipo


