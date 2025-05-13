import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

firstColor='blue'

@HostBinding('style.backgroundColor') backgroundColor: string;

@HostListener('mouseenter') onMouseEnter() {
  this.backgroundColor = 'red';
}

@HostListener('mouseleave') onMouseLeave() {
  this.backgroundColor = this.firstColor;

}

}
