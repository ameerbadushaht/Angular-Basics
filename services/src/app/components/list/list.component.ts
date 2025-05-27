import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
constructor(private list:ListService) { }

fetchedData:any;
ngOnInit(){
this.getData();
}

getData(){
  this.list.getData()


  this.list.getData().subscribe((res)=>{
    this.fetchedData=res;
    console.log(this.fetchedData);

  })


  // this.list.getData().subscribe(
  //   (next) => this.fetchedData = next,
  //   (error) => console.log(error),
  //   ()=>console.log('complete'),
  // )
}

}
