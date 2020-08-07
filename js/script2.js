//Declaración de el array con un objetos que tienen mis gastos mensuales.

let mensuales = [{
    item: "casa",
    costo: 10
  },
  {
    item: "pasaje de bus",
    costo: 20
  },
  {
    item: "internet",
    costo: 30
  },
  {
    item: "netflix",
    costo: 40
  },
  {
    item: 'pastillas',
    costo: 50
  }
];


let anuales = [{
    item: "cumpleaños javi",
    costo: 1,
    mes: "Julio"
  },
  {
    item: "aniversario liss",
    costo: 2,
    mes: "Abril"
  },
  {
    item: "permiso circulacion",
    costo: 3,
    mes: 'Diciembre'
  },
  {
    item: "navidad",
    costo: 4,
    mes: 'Diciembre'
  }
];

//función para sumar los gastos de un array.
const sumarGastos = (tipoGasto) => {
  let total = 0
  for (var i = 0; i < tipoGasto.length; i++) {
    total += tipoGasto[i].costo
  }
  return total
};

console.log(sumarGastos(mensuales))

console.log(sumarGastos(anuales))



// Función para filtrar resultados por mes
const gastoAnualporMes = (mes) => {
  let gasto = anuales.filter(i => {
    return i.mes === mes
  })
  return gasto
}
console.log(gastoAnualporMes('Diciembre'))

//Obtengo la suma de los gastos de diciembre.
console.log(sumarGastos(gastoAnualporMes('Diciembre')))

console.log(mensuales)

//Función para agregar un nuevo gasto.
mensuales.push({
  item: 'celular',
  costo: 3
})

console.log(mensuales)
console.log(mensuales)

const agregarGasto = (tipoGasto, item, costo) => {
  tipoGasto.push({
    item: item,
    costo: costo
  })
}

agregarGasto(mensuales, 'spotify', 20)
console.log(mensuales)

//Cuentas declaradas como objetos.
let cuentaRut = {
  saldo: 1000,
  obtenerSaldo() {
    console.log(this.saldo)
  },
  descontarSaldo(monto) {
    return this.saldo >= monto ?
      this.saldo = this.saldo - monto :
      console.log('no hay plata')

  },
  sumarSaldo(monto) {
    return this.saldo = this.saldo + monto
  }
}

let cuentaCorriente = {
  saldo: {
    debito: 500,
    credito: 1000,
  },
  cupo: 3000,
  obtenerSaldo(linea) {
    let debito = this.saldo.debito
    let credito = this.saldo.credito
    let total = credito + debito
    switch (linea) {
      case 'debito':
        console.log(debito)
        break;
      case 'credito':
        console.log(credito)
        break;
      default:
        console.log(total)
        break;
    }
  },

  descontarSaldo(monto) {
    let debito = this.saldo.debito
    let credito = this.saldo.credito
    let total = credito + debito

    if (debito > monto) {
      //descuenta de la linea de debito
      this.saldo.debito = debito - monto
    } else {
      if (total > monto) {
        //Descontar debito hasta 0, y el resto de la linea de credito.
        let prestado = debito - monto
        this.saldo.debito = 0
        this.saldo.credito = prestado + credito
      } else {
        console.log('no hay saldo suficiente en la linea de credito y debito')
      }
    }
  },
  sumarSaldo(monto) {
    let cupo = this.cupo
    let credito = this.saldo.credito
    let cupoOcupado = cupo - credito

    if (credito >= cupo) {
      //Despositar a debito
      this.saldo.debito += monto
      console.log('depositar a debito')
    } else {
      if (monto > cupoOcupado) {
        //desposita a credito y lo que sobra a debito
        this.saldo.debito += monto - cupoOcupado
        this.saldo.credito = cupo
        console.log('depositar a credito y lo que sobre a la debito')
      } else {
        //desposita solo a credito
        console.log('depositar todo a la cuenta credito')
      }
    }
  },

}



cuentaCorriente.obtenerSaldo('debito')
cuentaCorriente.obtenerSaldo('credito')
cuentaCorriente.obtenerSaldo()
console.log(cuentaCorriente.cupo)
cuentaCorriente.sumarSaldo(2050)
cuentaCorriente.obtenerSaldo('debito')
cuentaCorriente.obtenerSaldo('credito')
cuentaCorriente.obtenerSaldo()
console.log(cuentaCorriente.cupo)
cuentaCorriente.sumarSaldo(2050)
cuentaCorriente.obtenerSaldo('debito')
cuentaCorriente.obtenerSaldo('credito')
cuentaCorriente.obtenerSaldo()


//Funcion para hacer transferencias entre cuentas
const transferencia = (origen, destino, monto) => {
  origen.descontarSaldo(monto)
  destino.sumarSaldo(monto)
}

//transferencia(cuentaCorriente, cuentaRut, 600)