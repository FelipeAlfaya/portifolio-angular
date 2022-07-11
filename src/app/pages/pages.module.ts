import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages.routing.module';

//pages
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],

  imports: [CommonModule, RouterModule, PagesRoutingModule],
  exports: [HomeComponent],
})
export class PagesModule {}
