import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  paramID:any
  params:any
    constructor(private auth:AuthService, private router: Router,
      private activatedRoute: ActivatedRoute,) {
        this.params= this.activatedRoute.params.subscribe(params => {
          const data: any = params;
          //
          this.paramID = data?.febno;
        }); }


  ngOnInit(): void {
    // fetch params
    console.log(this.paramID);
    console.log(this.activatedRoute.params);


  }

  logOut(){
    this.auth.logout();
  }



}
