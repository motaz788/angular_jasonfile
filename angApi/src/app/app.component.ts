import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/component/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/component/footer/footer.component';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,CommonModule ,FooterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angApi';
}
