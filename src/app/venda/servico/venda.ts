import { Cliente } from './../../cliente/servico/cliente';
import { VendaProduto } from './vendaproduto';

export class Venda{
    codigo: string;
    data: Date;
    cliente: Cliente
    listaVentaItem: VendaProduto[] = [];
}