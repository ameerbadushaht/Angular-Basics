import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
    AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
selector: 'app-lifecycle',
template: `<p>Lifecycle Component: {{ data }}</p>`
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
    AfterViewInit, AfterViewChecked, OnDestroy {

@Input() data: string = '';

constructor() {
console.log('%c Constructor: Component instance created', 'color: blue');
}

ngOnChanges() {
console.log('%c ngOnChanges: Input property changed', 'color: green');
}

ngOnInit() {
console.log('%c ngOnInit: Component initialized', 'color: orange');
}

ngDoCheck() {
console.log('%c ngDoCheck: Change detection running', 'color: purple');
}

ngAfterContentInit() {
console.log('%c ngAfterContentInit: Content projected', 'color: teal');
}

ngAfterContentChecked() {
console.log('%c ngAfterContentChecked: Content checked', 'color: pink');
}

ngAfterViewInit() {
console.log('%c ngAfterViewInit: View initialized', 'color: cyan');
}

ngAfterViewChecked() {
console.log('%c ngAfterViewChecked: View checked', 'color: brown');
}

ngOnDestroy() {
console.log('%c ngOnDestroy: Component is being destroyed', 'color: red');
}
}
