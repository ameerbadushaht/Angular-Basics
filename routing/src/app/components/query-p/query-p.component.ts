import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-p',
  templateUrl: './query-p.component.html',
  styleUrls: ['./query-p.component.css']
})
export class QueryPComponent implements OnInit {


  searchName:any ='Febno'

  ngOnInit(): void {
    console.log(this.searchName);

  }
}
