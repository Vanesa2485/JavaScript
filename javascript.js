//Ecommerce de Diseño y Decoración
function  Bienvenida () {
    alert("Bienvenido a la tienda");
}
function Carrito(descripción) {
    alert("Usted ha comprado el siguiente producto\n" + descripción);
    alert("Gracias por su compra");
}

function menu () {
    let opción = prompt ("Seleccione la opción deseada:\n 1) Textil \n 2) Iluminación \n 3) Decoración \n 4) Cuadros \n 0) Salir");
    while (opción != 0) {
        switch (opción) {
            case "1":
                opcioncompra = prompt("\n 1) Almohadon 50 x 50   $4000 \n 2) Manta   $5000 \n 3) Alfombra   $6500");
                if (opcioncompra == "1"){
                    descripción = "\n 1) Almohadon 50 x 50   $4000";
                    Carrito(descripción);
                }
                else if (opcioncompra == "2"){
                        descripción = "\n 2) Manta   $5000";
                        Carrito(descripción);
                }
                else if (opcioncompra == "3"){
                        descripción = "\n 3) Alfombra   $6500";
                        Carrito(descripción);
                }
            break;
            case "2":
                opcioncompra = prompt("\n 1) Luminaria colgante   $10.000 \n 2) Luminaria de pie   $15.000 \n 3) Luminaria fibras naturales chica  $8.000");
                if (opcioncompra == "1") {
                    descripción = "\n 1) Luminaria colgante   $10.000";
                    Carrito(descripción);
                }
                else if (opcioncompra == "2") {
                    descripción = "\n 2) Luminaria de pie   $15.000";
                    Carrito(descripción);
                }
                else if (opcioncompra == "3") {
                        descripción = "\n 3) Luminaria fibras naturales chica  $8.000";
                        Carrito(descripción);
                }
            break;
            case "3":
                opcioncompra = prompt("\n 1) Floreros   $2000 \n 2) Velas   $1500 \n 3) Macetas   $2000");
                if (opcioncompra == "1") {
                    descripción = "\n 1) Floreros   $2000";
                    Carrito(descripción);
                }
                else if (opcioncompra == "2") {
                        descripción = "\n 2) Velas   $1500";
                        Carrito(descripción);
                }
                else if (opcioncompra == "3") {
                    descripción = "\n 3) Macetas   $2000";
                    Carrito(descripción);
                }
                break;
            case "4":
                opcioncompra = prompt("\n 1) Cuadros chicos  $2000 \n 2) Cuadros medianos   $3500 \n 3)Cuadros grandes   $4500");
                if (opcioncompra == "1") {
                    descripción = "\n 1) Cuadros chicos  $2000";
                    Carrito(descripción);
                }
                else if (opcioncompra == "2") {
                    descripción = "\n 2) Cuadros medianos   $3500";
                    Carrito(descripción);
                }
                else if (opcioncompra == "3") {
                        descripción = "\n 3) Cuadros grandes   $4500";
                        Carrito(descripción);
                }
                break;
            default: 
                alert ("La opción seleccionada no es correcta");
                break;
            }
    opción = prompt ("Seleccione la opción deseada\n 1) Textil \n 2) Iluminación \n 3) Decoración \n 4) Cuadros \n 0) Salir");
    }  
}

function Saludo () {
    alert ("Gracias por su visita");
}


Bienvenida ();
menu ();
Saludo ();
