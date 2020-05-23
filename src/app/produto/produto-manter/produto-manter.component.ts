import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../servico/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../servico/produto';

@Component({
  selector: 'app-produto-manter',
  templateUrl: './produto-manter.component.html',
  styleUrls: ['./produto-manter.component.scss']
})
export class ProdutoManterComponent implements OnInit {

  nomeProduto: string = '';
  operacao: string = 'Incluir';

  produto: Produto = new Produto();
  carregando: boolean = false;

  constructor(
    private routeActivated: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.descobrirOperacao();

  }

  descobrirOperacao(){
    this.nomeProduto = this.routeActivated.snapshot.params.id;
    if(this.nomeProduto != null){
      this.operacao = 'Alterar';
      this.produtoService.consultar(this.nomeProduto).subscribe(
        data => {
          this.produto = (<Produto[]>data)[0];
          console.log(data)
        }
      );

    }

  }

  voltar(){
    this.router.navigate(['/produto']);
  }

  incluir(){
    console.log(this.produto.nome)
    if(this.produto.nome != ''){
      this.carregando = true;
      this.produtoService.incluir(this.produto).subscribe(
        data => {
          this.carregando = false;
          alert(data['mensagem']);
          this.router.navigate(['/produto']);        
        }
      );
    };
  }

  alterar(){
    this.carregando = true;
    this.produtoService.alterar(this.produto).subscribe(
      data => {
        this.carregando = false;
        alert(data['mensagem']);
        this.router.navigate(['/produto']);        
      }
    );
  }
}
