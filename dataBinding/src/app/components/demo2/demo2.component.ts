import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {
abc = "Here we are using data binding";

img='https://get.pxhere.com/photo/blossom-plant-photography-flower-petal-bloom-red-botany-flora-close-up-dahlia-late-summer-dahlia-garden-fiery-autumn-flower-macro-photography-flowering-plant-daisy-family-plant-stem-land-plant-garden-cosmos-206439.jpg'

h=200
w=300


clicked(){
  alert("Button Clicked");
}

name=''
}
