import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PageService } from './services/page.service';
import { PagesComponent } from './components/pages/pages.component';
import { ContatoService } from './services/contato.service';
import { RegisterComponent } from './components/register/register.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { EditarCadastroComponent } from './editar-cadastro/editar-cadastro.component';

import { NgMaskModule } from '@fagnerlima/ng-mask';

const appRoutes: Routes = [
  {path: 'register',component: RegisterComponent},
  {path: 'consulta',component: ConsultaComponent},
  {path: 'editarPessoa/:id', component : EditarCadastroComponent},
  {path: ':page',component: PagesComponent},
  {path: '',component: PagesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    RegisterComponent,
    ConsultaComponent,
    EditarCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgMaskModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [
    PageService,
    ContatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
