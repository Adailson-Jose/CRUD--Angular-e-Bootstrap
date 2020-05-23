import { Component, OnInit } from '@angular/core';
import { Venda } from './servico/venda';
import { VendaService } from './servico/venda.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente/servico/cliente';
import { ClienteService } from '../cliente/servico/cliente.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

  venda: Venda = new Venda();
  selecionado: Venda;
  carregando: boolean = false;
  listaVenda: Venda[] = [];

  listaCliente: Cliente[] = [];
  
  constructor(
    private router: Router,
    private vendaService: VendaService,
    private clienteService: ClienteService

  ) { }

  ngOnInit(): void {

    this.clienteService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );


    this.vendaService.consultar('').subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
        
      }
    );
  }

  pesquisar(){
    this.carregando = true;
    let clienteCodigo = '';
    if(this.venda.cliente != null){
      clienteCodigo = this.venda.cliente.codigo;
    }

    this.vendaService.consultar(clienteCodigo).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
        this.carregando = false;    
      }
    );   
  }

  incluir(){    
    this.router.navigate(['/venda/incluir']);
  }

  alterar(){    
    this.router.navigate(['/venda/alterar/'+this.selecionado.cliente.codigo]);
  }

  remover(){
    this.carregando = true;
    this.vendaService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
        this.carregando = false;

      }
    );
  }

  selecionar(valor){
    this.selecionado = valor;    
  }

}
