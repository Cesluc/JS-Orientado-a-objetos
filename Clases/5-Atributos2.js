

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
    }

    retirarDeCuenta(valor){
        if(valor <= this.saldo)
            this.#saldo -= valor;
    }
}

cuentaDeLeonardo = new CuentaCorriente();
// cuentaDeLeonardo.saldo = 0;

cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(50);
console.log(cuentaDeLeonardo);

