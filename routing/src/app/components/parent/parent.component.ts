import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToChild1() {
    this.router.navigate(['child1'],{ relativeTo: this.route });
  }

  navigateToChild2() {
    this.router.navigate(['child2'], { relativeTo: this.route });
  }
}
