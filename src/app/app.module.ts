import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { TablePipe } from './pipes/table-pipe/table.pipe';
import { TablePageComponent } from './table-page/table-page.component'
import { PaginateComponent } from './paginate/paginate.component';
import { AulaFormComponent } from './aula-form/aula-form.component';
import { AulaTabelaComponent } from './aula-tabela/aula-tabela.component';
// import { PagOperacoesComponent } from './pag-operacoes/pag-operacoes.component';
// import { FiltroOperacoesComponent } from './filtro-operacoes/filtro-operacoes.component';
// import { TabelaOperacoesComponent } from './tabela-operacoes/tabela-operacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    CarrinhoComponent,
    ShopComponent,
    PaginationComponent,
    PaginateComponent,
    TablePipe,
    TablePageComponent,
    AulaFormComponent,
    AulaTabelaComponent,
    // PagOperacoesComponent,
    // FiltroOperacoesComponent,
    // TabelaOperacoesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);