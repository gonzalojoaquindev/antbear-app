"use strict";

const display = document.getElementById("display"),
  account = document.getElementById("account-category"),
  keyboard = document.getElementById("keyboard"),
  selector = document.getElementById("selector-trans"),
  operator = document.getElementById("operator"),
  amount = document.getElementById("amount"),
  showAmount = document.getElementById("show-amount"),
  inputAmount = document.getElementById("input-amount"),
  number = document.querySelectorAll(".number"), // number buttons
  cancel = document.getElementById("cancel"), // cancel button
  ok = document.getElementById("ok"), // botón enviar
  clear = document.getElementById("clear"), //botón borrar
  type = document.querySelectorAll(".type"),
  formulary = document.getElementById("formulary"),
  tipo = document.getElementById("tipo");
let selectorActivo = document.querySelector(".activo");

//escribir en firebase

const save = () => {
  const amount = formulary.amount.value,
    date = formulary.date.value,
    time = formulary.time.value,
    benefited = formulary.benefited.value,
    account = formulary.account.value,
    category = formulary.category.value,
    type = formulary.type.value,
    note = formulary.note.value;

  db.collection("register")
    .add({
      amount: amount,
      type: type,
      account: account,
      date: date,
      time: time,
      benefited: benefited,
      category: category,
      note: note,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

formulary.addEventListener("submit", (e) => {
  e.preventDefault();
  var datos = new FormData(formulary);

  console.log(datos.get("amount"));
  console.log(datos.get("account"));
  console.log(datos.get("category"));
  console.log(datos.get("type"));
  console.log(datos.get("date"));
  console.log(datos.get("time"));
  console.log(datos.get("benefited"));
  console.log(datos.get("note"));
});

tipo.addEventListener("click", (e) => {
  tipo.children[0].classList.remove("activo");
  tipo.children[1].classList.remove("activo");
  tipo.children[2].classList.remove("activo");
  let seleccionado = document.querySelector("input[type=radio]:checked");
  seleccionado.parentElement.classList.add("activo");
  selectorActivo = formulary.type.value;
  switch (selectorActivo) {
    case "ingreso":
      operator.textContent = "+";
      break;
    case "gasto":
      operator.textContent = "-";
      break;
    case "transferir":
      operator.textContent = "";
      break;
    default:
      operator.textContent = "-";
  }
});

// Ciclo que me permite escribir en el display
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    //Monto en formato número (para realizar operaciones)

    amount.innerHTML += e.target.innerHTML;

    //Monto en formato moneda(para mostrar en pantalla)
    const amountMoney = new Intl.NumberFormat("de-DE");
    console.log(amountMoney.format(amount.innerHTML));

    //Para escribir el monto en el menu detalle
    inputAmount.value = amount.innerHTML;
    //Para escribir el monto en el menu de detalle
    showAmount.textContent = `${operator.innerHTML} ${amount.innerHTML} CLP`;

    //para bajar el tamaño los números
    if (amount.innerHTML.length < 5) {
      amount.style.fontSize = "4rem";
    } else if (amount.innerHTML > 5 && amount.innerHTML.length < 8) {
      amount.style.fontSize = "3.5rem";
    } else if (amount.innerHTML > 8 && amount.innerHTML.length < 10) {
      amount.style.fontSize = "3rem";
    } else if (amount.innerHTML > 10 && amount.innerHTML.length < 12) {
      amount.style.fontSize = "2.5rem";
    } else if (amount.innerHTML > 12 && amount.innerHTML.length < 14) {
      amount.style.fontSize = "2rem";
    } else if (amount.innerHTML > 14 && amount.innerHTML.length < 16) {
      amount.style.fontSize = "1.5rem";
    }
  });
}

// Boton borrar digito
clear.addEventListener("click", function () {
  amount.innerHTML = amount.innerHTML.slice(0, -1);
  inputAmount.textContent = `${operator.innerHTML} ${amount.innerHTML} CLP`;
});

console.log("ahora le agregue un mensaje en la consola");
