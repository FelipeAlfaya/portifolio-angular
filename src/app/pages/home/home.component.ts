import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
