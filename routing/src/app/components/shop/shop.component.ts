import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  constructor(private router:Router,private route:ActivatedRoute){}

  gotoClothing(){
    this.router.navigate(['clothing'] , {relativeTo:this.route})
    // this.router.navigate(['shop/clothing'])
  }
}
