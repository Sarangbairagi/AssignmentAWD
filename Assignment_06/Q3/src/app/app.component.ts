import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1 [class] = "'Text'">Marvellous Infosystems</h1>
 <input type="text">`,
  styles: `.Text
  {
    color : rgb(241, 11, 11);
  }`
})
export class AppComponent {
  title = 'Q1';
}
