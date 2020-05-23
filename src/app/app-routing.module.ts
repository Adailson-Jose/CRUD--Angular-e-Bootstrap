import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { HomeComponent } from './home/home.component';
import { VendaComponent } from './venda/venda.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoManterComponent } from './produto/produto-manter/produto-manter.component';
import { ClienteManterComponent } from './cliente/cliente-manter/cliente-manter.component';
import { VendaManterComponent } from './venda/venda-manter/venda-manter.component';


const routes: Routes = [
  {
    path: '',    
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto',    
    component: ProdutoComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/incluir',    
    component: ProdutoManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/alterar/:id',    
    component: ProdutoManterComponent,
    pathMatch: 'full'
  },
   {
    path: 'cliente',    
    component: ClienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/incluir',    
    component: ClienteManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/alterar/:id',    
    component: ClienteManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'venda',    
    component: VendaComponent,
    pathMatch: 'full'
  },
  {
    path: 'venda/incluir',    
    component: VendaManterComponent,
    pathMatch: 'full'
  } ,
  {
    path: 'venda/alterar/:id',    
    component: VendaManterComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
