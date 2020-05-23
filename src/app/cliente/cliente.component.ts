import { Cliente } from './servico/cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from './servico/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {


  cliente: Cliente = new Cliente();
  selecionado: Cliente;
  listaCliente: Cliente[] = [];
  carregando: boolean = false;
  operacao: string = 'Pesquisar';
  
  constructor(    
    private router: Router,
    private clienteService: ClienteService
    ) { 

    }

    ngOnInit(): void {
      this.carregatTabela();
    }
    carregatTabela(){
      this.clienteService.consultar(this.cliente.nome).subscribe(
        data => {
          this.listaCliente = <Cliente[]>data;
          this.operacao = 'CarregandoTabela';

        }
      );   
    }

    pesquisar(){
      this.carregando = true;
      this.operacao = 'Pesquisar';
      this.clienteService.consultar(this.cliente.nome).subscribe(
        data => {
          this.listaCliente = <Cliente[]>data;
          if(this.listaCliente.length == 0){
            this.carregando = false;
            this.operacao = 'Pesquisar';
          }else{
            this.carregando = false;
            this.operacao = '';
          };

        }
      );   
    }
  
    incluir(){    
      this.router.navigate(['/cliente/incluir']);
    }
  
    alterar(){ 
      if (this.selecionado){   
        this.router.navigate(['/cliente/alterar/'+this.selecionado.nome]);
      }else{
        alert("Selecione um cliente, por favor.")
      };
    }
  
    remover(){
      if (this.selecionado){
        this.carregando = true;
        this.clienteService.remover(this.selecionado).subscribe(
          data => {
            alert(data['mensagem']);
            this.carregando = false;
          }
        );
      }else{
        alert("Selecione um cliente, por favor.")
      };

    }
  
    selecionar(valor){
      this.selecionado = valor;    
    }
  
}
