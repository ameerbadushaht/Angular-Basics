import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  data='hello world!'
  getData:any
ngOnInit(): void {

// sessionStorage.removeItem('data')
}

addData(){
  sessionStorage.setItem('data',this.data)
this.getData=sessionStorage.getItem('data')
}
}
