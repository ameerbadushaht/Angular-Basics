import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent {

  constructor(private router:Router){}

  gotoWomen(){
    this.router.navigate(['shop/clothing/women'])
  }
  gotoMen(){
    this.router.navigate(['shop/clothing/men'])
  }
}
