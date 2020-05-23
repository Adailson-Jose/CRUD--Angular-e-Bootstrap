import { Component, OnInit } from '@angular/core';
import { Produto } from './servico/produto';
import { Router } from '@angular/router';
import { ProdutoService } from './servico/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  selecionado: Produto;
  listaProduto: Produto[] = [];
  carregando: boolean = false;
  operacao: string = 'Pesquisar';
  
  constructor(    
    private router: Router,
    private produtoService: ProdutoService
    ) { 

    }

    ngOnInit(): void {
      this.carregatTabela();
    }
    carregatTabela(){
      this.produtoService.consultar(this.produto.nome).subscribe(
        data => {
          this.listaProduto = <Produto[]>data;
          this.operacao = 'CarregandoTabela';

        }
      );   
    }

    pesquisar(){
      this.carregando = true;
      this.operacao = 'Pesquisar';
      this.produtoService.consultar(this.produto.nome).subscribe(
        data => {
          this.listaProduto = <Produto[]>data;
          if(this.listaProduto.length == 0){
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
      this.router.navigate(['/produto/incluir']);
    }
  
    alterar(){ 
      if (this.selecionado){   
        this.router.navigate(['/produto/alterar/'+this.selecionado.nome]);
      }else{
        alert("Selecione um produto, por favor.")
      };
    }
  
    remover(){
      if (this.selecionado){
        this.carregando = true;
        this.produtoService.remover(this.selecionado).subscribe(
          data => {
            alert(data['mensagem']);
            this.carregando = false;
          }
        );
      }else{
        alert("Selecione um produto, por favor.")
      };

    }
  
    selecionar(valor){
      this.selecionado = valor;    
    }
  
}
