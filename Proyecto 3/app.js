var inp_cantidad = document.getElementById("cantidad");
var select_fullcolors = document.getElementById("fullcolors");
var btn_aceptar = document.getElementById("aceptar");
var spn_cuantos = document.getElementById("cuantos");
var contenedor = document.getElementById("conteiner")
var contenedorCell = " ";
var total = 0;
var maximoActual = 0;
var cont = 0;


btn_aceptar.addEventListener("click", function(){
		total += parseInt(inp_cantidad.value);

		spn_cuantos.innerHTML = total;


	var contenedorCell = "";
	for(var x = cont + 1; x < parseInt(inp_cantidad.value) + cont + 1; x++){
		contenedorCell += "<div class='boxes' id = 'box-"+ (maximoActual + x) +"' style='background:" + select_fullcolors.value + "'></div>";
	}

	contenedor.insertAdjacentHTML( 'beforeend', contenedorCell );

	for(var x = cont + 1; x < parseInt(inp_cantidad.value) + cont + 1; x++){
		desappear(maximoActual + x);
	}


	maximoActual += parseInt(inp_cantidad.value);

});


function desappear(x){
	var nombre = "box-" + x;
	var como = document.getElementById(nombre);
	
	como.addEventListener("click", function(){
		como.parentNode.removeChild(como);
		maximoActual = maximoActual - 1;
		spn_cuantos.innerHTML = maximoActual;

	})
}
