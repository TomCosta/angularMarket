import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  }
];

// loadChildren: './user/user.component.module#UserComponentModule',

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
