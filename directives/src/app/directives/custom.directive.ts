import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

constructor(private el:ElementRef){
this.el.nativeElement.style.color='red'
}

}
