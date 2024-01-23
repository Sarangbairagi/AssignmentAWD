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
  public sValue1 : string = "";
  public sValue2 : string = "";

  public Fun () 
  {
    this.sValue1 = "Marvellous Infosystems";
    return(this.sValue1);
  }
  public Sun () 
  {
    this.sValue2 = "Marvellous Infosystems";
    return(this.sValue2);
  }
}
