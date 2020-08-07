//Cuentas declaradas como objetos.
const cuenta = {

}

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