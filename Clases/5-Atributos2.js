

// Definicion clase

class Cliente{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente
{
    numero;
    saldo;
    agencia;

    //Constructor

    constructor(){
        this.saldo = 0;
        this. numero = '';
        this. agencia = '';
    }

// Creamdo metodo de deposito
    depositoEnCuenta(valor){
        this.saldo += valor;
    }

    retirarDeCuenta(valor){
        this.saldo -= valor;
    }
}

cuentaDeLeonardo = new CuentaCorriente();
// cuentaDeLeonardo.saldo = 0;

cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(50);
console.log(cuentaDeLeonardo);

