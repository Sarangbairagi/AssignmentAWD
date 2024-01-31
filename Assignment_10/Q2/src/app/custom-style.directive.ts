import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj : ElementRef) 
  {

  }

  ngOnInit() {
    this.obj.nativeElement.style.backgroundColor = 'red';
    this.obj.nativeElement.style.fontWeight = 'bold';
  }

  


}
