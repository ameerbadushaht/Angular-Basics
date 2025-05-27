import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rdemo1',
  templateUrl: './rdemo1.component.html',
  styleUrls: ['./rdemo1.component.css']
})
export class Rdemo1Component {

  userForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl(''),
    password: new FormControl('')
  })

  // userData = {
  //   name: '',
  //   email: '',
  //   password: ''
  // }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
