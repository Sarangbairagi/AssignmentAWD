import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public iValue : string = "";
  public Fun() : any
  {
    this.iValue = "Eduvcating for Better Tomorrow";
    return(this.iValue);
  }
}
