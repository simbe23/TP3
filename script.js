$(document).ready(function(){
	setBindings();

			var total = 0;

function setBindings() {
	$(".navbar a").click(function(e){
		e.preventDefault();
		if (e.currentTarget.id !== "encuesta") {
				var sectionID = e.currentTarget.id + "1";
				$("html body").animate({
					scrollTop: $("#" + sectionID).offset().top
				}, 1000)
		}
		else {
			window.location.href = 'encuesta.html';
		}

	})};


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




// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = $("#mynav")[0];

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

});



function validateForm()
  {
	var letters = /^[A-Za-z]+$/;
	var x = document.forms["myForm"]["firstname"].value;
	var y = document.forms["myForm"]["lastname"].value;
	var z = document.forms["myForm"]["bday"].value;
	var w = document.forms["myForm"]["gender"].value;
	var v = document.forms["myForm"]["valoracion"].value;

	document.forms["myForm"]["firstname"].style.border = "none";
	document.forms["myForm"]["lastname"].style.border = "none";
	document.forms["myForm"]["bday"].style.border = "1px solid black";
	/*document.forms["myForm"]["gender"].style.border = "2px solid black"
	document.forms["myForm"]["valoracion"].style.border = "2px solid black";
*/
	if (x == "" || y == '' || z == '' || w == '' || v == '') {
        alert("complete todos los campos obligatorios");
				if (x == "") {
    				document.forms["myForm"]["firstname"].style.border = "2px solid red";
  				}
				if (y == "") {
	    			document.forms["myForm"]["lastname"].style.border = "2px solid red";
	  			}
				if (z == "") {
		    		document.forms["myForm"]["bday"].style.border = "2px solid red";
		  		}
			/*	if (w == "") {
			  		document.forms["myForm"]["gender"].style.border = "2px solid red";
			  	}*/
				if (v == "") {
						document.forms["myForm"]["valoracion"].style.border = "2px solid red";
					}

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
			if (! x.match(letters)) {
					document.forms["myForm"]["firstname"].style.border = "2px solid red";
				}
			if (! y.match(letters)) {
					document.forms["myForm"]["lastname"].style.border = "2px solid red";
				}

			return false;
    }

 };

function cancelar()
{
	if (confirm("Desea cancelar?")) {
    		return true;
    } else {
        return false;
    }
};
