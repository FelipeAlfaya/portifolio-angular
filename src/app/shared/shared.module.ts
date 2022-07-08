//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageComponent],

  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, PageComponent],
})
export class SharedModule {}
