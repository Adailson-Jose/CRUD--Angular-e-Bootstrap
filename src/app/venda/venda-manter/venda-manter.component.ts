import { Cliente } from './../../cliente/servico/cliente';
import { Produto } from './../../produto/servico/produto';
import { VendaProduto } from './../servico/vendaproduto';
import { Venda } from './../servico/venda';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendaService } from '../servico/venda.service';
import { ProdutoService } from 'src/app/produto/servico/produto.service';
import { ClienteService } from 'src/app/cliente/servico/cliente.service';

@Component({
  selector: 'app-venda-manter',
  templateUrl: './venda-manter.component.html',
  styleUrls: ['./venda-manter.component.scss']
})
export class VendaManterComponent implements OnInit {

  operacao: string = 'Incluir';
  carregando: boolean = false;

  venda: Venda = new Venda();

  vendaProduto: VendaProduto = new VendaProduto();

  listaProduto: Produto[] = [];
  listaCliente: Cliente[] = [];

  constructor(    
    private router: Router,
    private vendaService: VendaService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void { 
    
    this.clienteService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );
    
    this.produtoService.consultar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
      }
    );
  }

  voltar(){
    this.router.navigate(['/venda']);
  }

  incluir(){
    if(this.venda.listaVentaItem.length !=0 && this.venda.cliente != null && this.venda.data != null){
      this.carregando = true;
      this.vendaService.incluir(this.venda).subscribe(
        data => {
          alert(data['mensagem']);
          this.router.navigate(['/venda']);   
          this.carregando = false;
      
        }
      );
    }else{
      alert("Por favor preencher  todos os dados da venda!")
    };
  }
  
  adicionar(){
    if(this.vendaProduto.produto != null){
      this.venda.listaVentaItem.push(this.vendaProduto);
      this.vendaProduto = new VendaProduto();
    }else{
      alert('Selecione um item para ser daicionado a sacola!')
    };
  }

  removercurso(vendaProduto){

    this.venda.listaVentaItem = this.venda.listaVentaItem.filter(obj => obj !== vendaProduto);

  } 

}
