

// Definicion clase

class Cliente{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente
{
    numero;
    #saldo; //creando atributo como privado _saldo con raya al piso lo muestra al imprimir en consola (solo propuesta para el desarrollador)
    agencia;

    //Constructor

    constructor(){
        this.#saldo = 0;
        this. numero = '';
        this. agencia = '';
    }

// Creamdo metodo de deposito
    depositoEnCuenta(valor){
        if(valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor){
        if(valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

}


cuentaDeLeonardo = new CuentaCorriente();
// cuentaDeLeonardo.saldo = 0;

let saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es ' + saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log('El saldo actual es ' + saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log('El saldo actual es ' + saldo);


cuentaDeLeonardo.depositoEnCuenta(10);
saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es ' + saldo);

