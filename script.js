$(document).ready(function(){
	setBindings();


var total = 0;

function setBindings() {
	if (on_index == true) {

						$(".navbar a").click(function(e){
							e.preventDefault();
							if ((e.currentTarget.id !== "encuesta") & (e.currentTarget.id !== "contacto") & (e.currentTarget.id !== "total1")){
									var sectionID = e.currentTarget.id + "1";
									$("html body").animate({
										scrollTop: $("#" + sectionID).offset().top
									}, 1000)
							}
							else {
								if (e.currentTarget.id == "encuesta") {
									window.location.href = 'encuesta.html';}
								if (e.currentTarget.id == "contacto") {
									window.location.href = 'contacto.html';
								}
							}

	})}};


	$(".box").click(function(e){
			var id = $(this).children().children().children().attr("id");
						if ($("#" + id).css('opacity') == 1) {
									$("#" + id).fadeTo(1, .25);
									var precio = parseInt($("#" + id + "precio")[0].innerText);
									total = total + precio;
									$("#total")[0].textContent = total;

						}
						else {
									$("#" + id).fadeTo(1, 1);
									var precio = parseInt($("#" + id + "precio")[0].innerText);
									total = total - precio;
									$("#total")[0].textContent = total;
						}

		});


 var header = $("#mynav")[0];


$("#submit").click(function(){
	var letters = /^[A-Za-z]+$/;
	var x = $("[name=firstname]").val();
	var y = $("[name=lastname]").val();
	var z = $("[name=bday]").val();
	var w = $("[name=gender]").val();
	var v = $("[name=valoracion]").val();


	if (x == "" || y == '' || z == '' || w == '' || v == '') {
				alert("complete todos los campos obligatorios");
				return false;
		} else if (x.match(letters) && y.match(letters)) {
			alert('Nombre: ' + x + '\nApellido: ' + y + '\nFecha de nacimiento: ' + z + '\nSexo: ' + w + '\nValoracion: ' + v);

			$("#nota-informativa")
			.delay(1) // Tiempo del retraso en milisegundos antes de que aparezca el contenedor
			.show( "bounce", { times:3, distance:100, direction:'down' }, 2000 ) // Uso de .show, específicamente con bounce y algunos parámetros específicos de esta animación.
			setTimeout(function() { $("#nota-informativa").hide(); }, 5000);

			return false;
			}
			else
			{
			alert('nombre o apellido no validos, utilice solo caraceteres alfabeticos');
			return false;
		}
});

$("#cancelar").click(function(){
		if (confirm("Desea cancelar?")) {
					return true;
				} else {
					return false;
		}
});

});
