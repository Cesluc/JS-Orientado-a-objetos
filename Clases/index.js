const nombreCliente = "Cesar";
const dniCliente = "1010485759"
const numeroCuenta = "123434343";
const saldoCuenta = "1000";

console.log(nombreCliente);
console.log(dniCliente);

// Definicion clase

class Cliente{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
}

// nuevo cliente

const cliente1 = new Cliente();

cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "54135498";
cliente1.numeroCuenta = "31189876486";
cliente1.saldoCuenta = "1500";

console.log(cliente1);
const cliente2 = new Cliente();

cliente2.nombreCliente = "Cesar";
cliente2.dniCliente = "1010485759"
cliente2.numeroCuenta = "123434343";
cliente2.saldoCuenta = "1000";

const cliente3 = new Cliente();

cliente2.nombreCliente = "Jaime";
cliente2.dniCliente = "1048525759"
cliente2.numeroCuenta = "1234343";
cliente2.saldoCuenta = "900";

console.log(cliente2);
console.log(cliente3);
