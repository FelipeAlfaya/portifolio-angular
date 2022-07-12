import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages.routing.module';

//pages
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjetosComponent,
    ContatoComponent,
  ],

  imports: [CommonModule, RouterModule, PagesRoutingModule],
  exports: [HomeComponent, AboutComponent, ProjetosComponent, ContatoComponent],
})
export class PagesModule {}
