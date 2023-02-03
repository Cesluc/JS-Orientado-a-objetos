// importacion de clases
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente1 = new Cliente();
cliente1.nombreCliente = 'Leonardo';
cliente1.dniCliente = '456168135'
cliente1.rutCliente = '641654';

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente1;

console.log(cuentaDeLeonardo);
// cuentaDeLeonardo.saldo = 0;

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log('El saldo actual (cuenta de leonardo) es ' + saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Cesar';
cliente2.dniCliente = '53268135'
cliente2.rutCliente = '691654';

const cuentaDeCesar = new CuentaCorriente();
cuentaDeCesar.numero = '2';
cuentaDeCesar.agencia = '002';
cuentaDeCesar.cliente = cliente2;

console.log(cuentaDeCesar);

cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeCesar)
saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual (cuenta de leonardo) es ' + saldo);


let saldoCesar = cuentaDeCesar.verSaldo();
console.log('El saldo actual (cuenta de Cesar) es ' + saldoCesar);
