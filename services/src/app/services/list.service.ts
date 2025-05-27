import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  getData(){
 return  this.http.get(this.url)
    // console.log(this.http.get(this.url));


  }
}
