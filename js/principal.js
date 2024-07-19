/*GANANCIA ARTÍCULOS
Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine el promedio de los precios de venta y cantidad de
artículos con precio superior a 65$
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)
Promedio de los precios de venta: 41.25
Cantidad de artículos con precio superior a 65$:2*/

import CL_tienda from "./CL_tienda.js";
import CL_articulos from "./CL_articulos.js";

let art1= new CL_articulos(888,10,15);
let art2= new CL_articulos(777,20,25);
let art3= new CL_articulos(999,15,25);
let art4= new CL_articulos(666,25,35);
let art5= new CL_articulos(111,50,70);
let art6= new CL_articulos(333,40,50);
let art7= new CL_articulos(444,80,100);
let art8= new CL_articulos(222,5,10);

let tienda= new CL_tienda();


tienda.procesar(art1);
tienda.procesar(art2);
tienda.procesar(art3);
tienda.procesar(art4);
tienda.procesar(art5);
tienda.procesar(art6);
tienda.procesar(art7);
tienda.procesar(art8);

let salida = document.getElementById("salida");

salida.innerHTML=`
Promedio de los precios de venta: ${tienda.promedioventa()}
<br>Cantidad de artículos con precio superior a 65$:${tienda.artsuperior()}
`

