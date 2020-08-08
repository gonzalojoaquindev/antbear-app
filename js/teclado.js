const screen = document.getElementById("screen");
const teclado = document.getElementById("teclado");
const formatterPeso = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  minimumFractionDigits: 0,
});
let monto = "";

//función para agregar digito
const add = (n) => {
  return (monto += n);
};
//funcion para quitar digito
const rem = () => {
  return (monto = monto.slice(0, -1));
};

const refresh = () => {
  screen.innerHTML = formatterPeso.format(monto);
  console.log(monto);
};
//console.log(formatterPeso.format(monto));

teclado.addEventListener("click", (e) => {
  if (e.target.className === "tecla") {
    add(e.target.textContent);
    refresh();
  }
  if (e.target.className === "borrar") {
    rem();
    refresh();
  }
});
