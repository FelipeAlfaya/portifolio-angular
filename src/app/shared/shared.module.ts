//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//components
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [HeaderComponent, PageComponent],

  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, PageComponent],
})
export class SharedModule {}
