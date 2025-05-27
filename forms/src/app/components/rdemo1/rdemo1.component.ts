import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rdemo1',
  templateUrl: './rdemo1.component.html',
  styleUrls: ['./rdemo1.component.css']
})
export class Rdemo1Component {


  //formbuilder

  constructor(private fb: FormBuilder) { }

  // userForm = new FormGroup({
  //   name: new FormControl('',[Validators.required]),
  //   email: new FormControl(''),
  //   password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])')])
  // })


  userForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
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
