import { TablePageComponent } from './table-page/table-page.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { AulaFormComponent } from './aula-form/aula-form.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'aula-form', pathMatch: 'full' },
  { path: 'aula-form', component: AulaFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'table', component: TablePageComponent},
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
