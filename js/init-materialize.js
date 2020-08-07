/*Navegación desplegable*/

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

/*Iniciar el input select de las cuentas y las cetegorias */
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});



//iniciar los dos tabs, el que me permite moverme entre el teclado y los detalles, y el permite moverce entra ingreso, gasto y transferencia
document.addEventListener("DOMContentLoaded", function () {
  var sin = document.querySelectorAll(".tabs");
  var hola = document.getElementById('swiper')
  var instances = M.Tabs.init(sin);
  var instances2 = M.Tabs.init(hola, {
    swipeable: true,
  });
});

/*boton agregar registro*/
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems);
});

//iniciar el formulario de fecha
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
});

//inicar el formulario de hora
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(elems);
});

//iniciar el autocompletado de los formularios
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems);
});