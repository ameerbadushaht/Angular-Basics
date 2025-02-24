import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {



defaultColor = 'red';

  constructor() { 
    this.BackgroundColor=this.defaultColor
  }

  @HostBinding('style.backgroundColor') BackgroundColor: string = this.defaultColor;

  @HostListener('mouseenter') onMouseEnter() {
    this.BackgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.BackgroundColor = this.defaultColor;
  }

}
