const nombreCliente = "Cesar";
const dniCliente = "1010485759"
const numeroCuenta = "123434343";
const saldoCuenta = "1000";

// console.log(nombreCliente);
// console.log(dniCliente);

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

// Creamdo metodo de deposito
    depositoEnCuenta(valor){
        this.saldo += valor;
    }

}

// nuevo cliente

const cliente1 = new Cliente();

cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "54135498";
cliente1.rutCliente = "V234234";

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "31189876486";
cuentaCorriente1.saldo = 1500;
cuentaCorriente1.agencia = 1001;

// console.log(cliente1);
const cliente2 = new Cliente();

cliente2.nombreCliente = "Cesar";
cliente2.dniCliente = "1010485759"
cliente2.rutCliente = "V734234";


const cuentaCorriente2 = new CuentaCorriente();


cuentaCorriente2.saldo = 1000;
cuentaCorriente2.numero = "123434343";
cuentaCorriente2.agencia = 1001;


const cliente3 = new Cliente();

cliente3.nombreCliente = "Jaime";
cliente3.dniCliente = "1048525759"
cliente3.rutCliente = "V254234";


const cuentaCorriente3 = new CuentaCorriente();


cuentaCorriente3.numero = "1234343";
cuentaCorriente3.saldo = 900;
cuentaCorriente3.agencia = 1002;


// console.log(cliente2);
// console.log(cuentaCorriente2);

// console.log(cliente3);
// console.log(cuentaCorriente3);

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(500);
console.log(cuentaCorriente2.saldo);