//Ecommerce de Diseño y Decoración

function  Bienvenida () {
    alert("Bienvenido a la Tienda");
}

class Producto{
        
    constructor(id,nombre,categoria,precio){
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    
    }
}
class Tienda{
    constructor(id,productos){
        this.id = id;
        this.productos = productos;
}

    editarProducto(idProducto){
        let producto = this.productos.find(p => p.id === idProducto);
        document.getElementById("IdProducto").hidden = true;
        document.getElementById("nombreProducto").value = producto.nombre;
        document.getElementById("categoriaProducto").value = producto.categoria;
        document.getElementById("precioProducto").value = producto.precio;
        const formEditarproducto = document.createElement("form");

        const botonGrabar = document.createElement("input");
        botonGrabar.type = "submit";
        botonGrabar.classList = " mb-3 btn btn-primary";
        botonGrabar.value = "GRABAR";

        formEditarproducto.appendChild(botonGrabar);
        document.getElementById("formulario").appendChild(formEditarproducto);
        botonGrabar.addEventListener("click",() => {
            producto.nombre = document.getElementById("nombreProducto").value;
            producto.categoria = document.getElementById("categoriaProducto").value;
            producto.precio = document.getElementById("precioProducto").value;
            localStorage.setItem("tienda", JSON.stringify(this));
        });
}

    listarProductos() {
        const listaProductos = document.getElementById("listaProductos");
        listaProductos.classList = "row row-cols-3"
        listaProductos.innerHTML = "";
        this.productos.map(producto => {
            const columna = document.createElement("div");
            columna.classList = "col";
            const div = document.createElement("div");
            div.classList = "card";
            const titulo = document.createElement("h5");
            titulo.classList = "card-header";
            titulo.innerHTML = `Nombre: ${producto.nombre}  Categoria: ${producto.categoria} Precio: ${producto.precio}`;
            const info = document.createElement("div");
            info.classList = "card-body";
            const id = document.createElement("p");
            id.innerHTML = `ID: ${producto.id}`;

            const botonEliminar = document.createElement("button");
            botonEliminar.classList = "btn btn-danger";
            botonEliminar.innerHTML = "Eliminar";

            botonEliminar.addEventListener("click", () => {
                this.eliminarProducto(producto.id);
                this.listarProductos();
            });

            const botonEditar = document.createElement("button");
            botonEditar.classList = "btn btn-success";
            botonEditar.innerHTML = "Editar";

            botonEditar.addEventListener("click", () => {
                this.editarProducto(producto.id);
                this.listarProductos();
            });

            div.appendChild(titulo);
            info.appendChild(id);
            info.appendChild(botonEliminar);
            info.appendChild(botonEditar);
            div.appendChild(info);

            columna.appendChild(div);
            listaProductos.appendChild(columna);
        });
    }

    agregarProducto(producto){
        if (producto.nombre === "" || producto.categoria === "" || producto.precio === "") {
            error.innerHTML = "Debe completar todos los campos";
            return;
        }
        const productoExistente = this.productos.find(e => e.id === producto.id);
        if (productoExistente) {
            error.innerHTML = "Ya hay un producto con ese ID";
            return;
        }
        this.productos.push(producto);
        localStorage.setItem("tienda", JSON.stringify(this));
        document.getElementById("IdProducto").value = "";
        document.getElementById("nombreProducto").value = "";
        document.getElementById("categoriaProducto").value = "";
        document.getElementById("precioProducto").value = "";
    }

    eliminarProducto(idProducto){
        this.productos = this.productos.filter(producto => producto.id != idProducto);
        localStorage.setItem("tienda", JSON.stringify(this));
    }


}

class Formulario {
    constructor (tipo) {
        this.tipo = tipo;
    }

    construirFormulario() {
    const formagregarProducto = document.createElement("form");
    formagregarProducto.id = "formagregarProducto";

    const inputId = document.createElement("input");
    inputId.id = "IdProducto";
    inputId.type = "number";
    inputId.classList = "mb-3 form-control";
    inputId.placeholder = "Id";

    const inputNombre = document.createElement("input");
    inputNombre.id = "nombreProducto";
    inputNombre.type = "text";
    inputNombre.classList = "mb-3 form-control";
    inputNombre.placeholder = "Nombre";

    const inputCategoria = document.createElement("input");
    inputCategoria.id = "categoriaProducto";
    inputCategoria.type = "text"; 
    inputCategoria.classList = "mb-3 form-control";
    inputCategoria.placeholder = "Categoría";

    const inputPrecio = document.createElement("input");
    inputPrecio.id = "precioProducto";
    inputPrecio.type = "number"; 
    inputPrecio.classList = "mb-3 form-control";
    inputPrecio.placeholder = "Precio";

    const botonAgregar = document.createElement("button");
    botonAgregar.classList = "btn btn-primary";
    botonAgregar.type = "submit"; 
    botonAgregar.innerText = "Agregar"; 

    formagregarProducto.appendChild(inputId);
    formagregarProducto.appendChild(inputNombre);
    formagregarProducto.appendChild(inputCategoria);
    formagregarProducto.appendChild(inputPrecio);
    formagregarProducto.appendChild(botonAgregar);

    document.getElementById("formulario").appendChild (formagregarProducto);

    formagregarProducto.addEventListener("submit", (e) => {
        e.preventDefault();
        const IdProducto = document.getElementById("IdProducto").value;
        const nombreProducto = document.getElementById("nombreProducto").value;
        const categoriaProducto = document.getElementById("categoriaProducto").value;
        const precioProducto = document.getElementById("precioProducto").value;
        const producto = new Producto (IdProducto, nombreProducto, categoriaProducto, precioProducto);
        tiendaNueva.agregarProducto(producto);
        tiendaNueva.listarProductos();
        });
    }
}

let tiendaNueva;
let error = document.getElementById("error");

const iniciar = () => {
    let TiendaGuardado = localStorage.getItem ("tienda");
    if (TiendaGuardado){
        TiendaGuardado = JSON.parse(TiendaGuardado);
        tiendaNueva = new Tienda(TiendaGuardado.id, TiendaGuardado.productos);
        tiendaNueva.listarProductos();
    } else {
        tiendaNueva = new Tienda ("Javascript",[]);
        localStorage.setItem("tienda", JSON.stringify(tiendaNueva));
        error.innerHTML = "La tienda se encuentra vacia";
    }
    const formulario = new Formulario ("Agregar");
    formulario.construirFormulario();
}

/*
function contraseña (password) {
    let clave = prompt ("Ingresar contraseña")
    if (clave == "1234"){
        password.password = true;
        }
    else if (clave !== "1234"){
        password.password = false; 
        }
}


class producto{
        
        constructor(id,nombre,categoria,precio){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        
        }
}

function precargararreglo (productos,id) {
        
    
        productos.push(new producto(id.id,"Almohadon 50 x 50","Textil","4000"))
        productos.push(new producto((id.id=id.id+1),"Manta","Textil","5000"))
        productos.push(new producto((id.id=id.id+1),"Alfombra","Textil","6500"))
        productos.push(new producto((id.id=id.id+1),"Luminaria colgante","Iluminación","10.000"))
        productos.push(new producto((id.id=id.id+1),"Luminaria de pie","Iluminación","15.000"))
        productos.push(new producto((id.id=id.id+1),"Luminaria fibras naturales chicas","Iluminación","8.000"))
        productos.push(new producto((id.id=id.id+1),"Floreros", "Decoración", "2000"))
        productos.push(new producto((id.id=id.id+1),"Velas", "Decoración", "1500"))
        productos.push(new producto((id.id=id.id+1),"Macetas","Decoración", "2000"))    
        productos.push(new producto((id.id=id.id+1),"Cuadros chicos","Cuadros","2.000"))
        productos.push(new producto((id.id=id.id+1),"Cuadros medianos","Cuadros","3.500"))
        productos.push(new producto((id.id=id.id+1),"Cuadros grandes","Cuadros","4.500"))
        
}

function filtrarProductos(filtro) { 

    resultado = this.productos.filter((producto) => producto.categoria.includes (filtro))
    console.log(resultado);
    return resultado;
    
}
function ExisteArticulo(arreglo,existe) { 

    verdadero = arreglo.some((producto) => producto.id == existe)
    return verdadero;
    
}

function Carrito(descripción) {
    alert("Usted ha comprado el siguiente producto\n" + descripción);
    alert("Gracias por su compra");
}


function agregarProductos(id,nombre, categoria, precio) {
    productos.push(new producto((id.id=id.id+1),nombre,categoria, precio));
}


function verDatos(producto) {
    return `Codigo Articulo: ${producto.id}
    Articulo: ${producto.nombre}
    Categoria: ${producto.categoria}
    Precio: ${producto.precio}`;
}

function verProductos(arreglo) {
    let datosProductos = "Lista de productos: \n \n";
    arreglo.forEach((producto) => {
        datosProductos += `${(verDatos(producto))} \n`;
    });
    return datosProductos;
}



function verProducto(id) {
    let producto = this.productos.find(producto => producto.id === id);
    if (producto) {
        return verDatos(producto);
    } else {
        return `No existe producto con ese nombre ${producto.id}`;
    }
}


function modificarProducto(id,productos) {
    let producto = this.productos.find((producto) => producto.id === id);
    if (producto != undefined){
        do {
            opcion = prompt(`Seleccione una opción a modificar:
            1.Modificar nombre
            2.Modificar categoria
            3.Modificar precio
            99.Volver al menu pricipal`);
                switch (opcion) {
                    case "1":
                        nombre = prompt("Ingrese nuevo nombre");
                        producto.nombre = nombre;
                        break;
                    case "2":
                    categoria = prompt (`Ingresar una de las categorias disponibles:
                    1. Textil
                    2. Iluminación
                    3. Decoración
                    4. Cuadros`);
                    if (categoria == 1) {
                        categoria = "Textil";
                        producto.categoria = categoria;
                    }
                    else if (categoria == 2) {
                        categoria = "Iluminación";
                        producto.categoria = categoria;
                    }
                    else if (categoria == 3) {
                        categoria = "Decoración";
                        producto.categoria = categoria 
                    }
                    else if (categoria == 4) {
                        categoria = "Cuadros";
                        producto.categoria = categoria 
                    }
                    else 
                        Alert ("Eliga la opción correcta");
                        break;
                    case "3":
                        precio = prompt("Ingrese nuevo precio");
                        producto.precio = precio
                        break;
                    case "99":
                        break;
                    default:
                        alert("Opción inválida");
                        break; 
                }
        }
        while (opcion !== "99");
        console.log(productos);
    }
    else{
        alert("No existe el producto");
    }
    return
}

function eliminarProducto(id) {
    let producto = this.productos.find((producto) => producto.id === id);
    if (producto != undefined){
        let index = this.productos.indexOf(producto);
        this.productos.splice(index, 1);
        alert("Producto quitado de stock");
    }
    else{
        alert("No existe el producto");
    }
    return 
}

function administrarProductos(id) {
    do {
        opcion = prompt(`Seleccione una opción:
        1. Agregar producto
        2. Modificar producto
        3. Listar productos  
        4. Eliminar producto
        99. Salir`);
        switch (opcion) {
            case "1":
                nombre = prompt("Ingresar nombre del producto");
                categoria = prompt (`Ingresar una de las categorias disponibles:
                1. Textil
                2. Iluminación
                3. Decoración
                4. Cuadros`);
                precio = prompt ("Ingresar precio del producto");
                if (categoria == 1) {
                    categoria = "Textil";
                    agregarProductos(id,nombre,categoria,precio);
                    alert("Producto Agregado");
                }
                else if (categoria == 2) {
                    categoria = "Iluminación";
                    agregarProductos(id,nombre,categoria,precio);
                    alert("Producto Agregado");
                }
                else if (categoria == 3) {
                    categoria = "Decoración";
                    agregarProductos(id,nombre,categoria,precio);
                    alert("Producto Agregado");
                }
                else if (categoria == 4) {
                    categoria = "Cuadros";
                    agregarProductos(id,nombre,categoria,precio);
                    alert("Producto Agregado");
                }
                else 
                    Alert ("Eliga la opción correcta");
                break;
            case "2":
                id = parseInt(prompt("Ingresar el codigo del producto a modificar"));
                modificarProducto(id,productos);
                alert("Producto Modificado");
                break;
            case "3":
                alert(verProductos(productos));
                break;
            case "4":
                id = parseInt(prompt("Ingresar codigo del producto a eliminar"));
                eliminarProducto(id);
                break;
            case "99":
                break;
            default:
                alert("Opción inválida");
                break;
        }
    } while (opcion !== "99");
    console.log(productos);
}

function menu () {
    
    var id = {id:1};
    var password = {password:false};
    productos = [];
    filtrado = [];
    precargararreglo(productos,id);
    let opción = prompt (`Seleccione el filtro deseado:
                1. Textil
                2. Iluminación
                3. Decoración
                4. Cuadros
                5. Ver Todos Los Articulos
                98. Administrar Tienda
                99. Salir`)
    while (opción != 99) {
        switch (opción) {
        case "1":
            filtrarProductos("Textil");
            opcioncompra = parseInt(prompt("Elija un Articulo de la  " + (verProductos(resultado))));
            existe = ExisteArticulo(resultado,opcioncompra);
            if (existe == true) {
                Carrito(verProducto(opcioncompra));
                eliminarProducto(opcioncompra);
            }
            else {
                alert("Opcion Incorrecta");
            }
        break;
        case "2":
            filtrarProductos("Iluminación");
            opcioncompra = parseInt(prompt("Elija un Articulo de la  " + (verProductos(resultado))));
            existe = ExisteArticulo(resultado,opcioncompra);
            if (existe == true) {
                Carrito(verProducto(opcioncompra));
                eliminarProducto(opcioncompra);
            }
            else {
                alert("Opcion Incorrecta");
            }
            break; 
            case "3":
            filtrarProductos("Decoración");
            opcioncompra = parseInt(prompt("Elija un Articulo de la  " + (verProductos(resultado))));
            existe = ExisteArticulo(resultado,opcioncompra);
            if (existe == true) {
                Carrito(verProducto(opcioncompra));
                eliminarProducto(opcioncompra);
            }
            else {
                alert("Opción Incorrecta");
            }
            break;
            case "4":
                filtrarProductos("Cuadros");
            opcioncompra = parseInt(prompt("Elija un Articulo de la  " + (verProductos(resultado))));
            existe = ExisteArticulo(resultado,opcioncompra);
            if (existe == true) {
                Carrito(verProducto(opcioncompra));
                eliminarProducto(opcioncompra);
            }
            else {
                alert("Opción Incorrecta");
            }
            break;
            case "5": {
                alert(verProductos(productos));
            }
            break;
            case "98":{
                contraseña(password);
                if (password.password == true) {
                    administrarProductos(id);
                }
                else {
                    alert ("La contraseña es incorrecta");
                }
                break;
            }
            default: 
                alert ("La opción seleccionada no es correcta");
                break;
            }
    opción = prompt ("Seleccione la opción deseada\n 1. Textil \n 2. Iluminación \n 3. Decoración \n 4. Cuadros \n 5. Ver todos los Artículos \n 98. Administrar Tienda \n 99) Salir");
    }  
}

function Saludo () {
    alert ("Gracias por su visita");
}
*/

//Bienvenida ();
iniciar ();
//menu ();
//Saludo ();
