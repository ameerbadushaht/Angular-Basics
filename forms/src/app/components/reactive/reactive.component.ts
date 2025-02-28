import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, Validator, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  
userForm= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    skills: new FormArray([
        new FormGroup({
          name: new FormControl('', Validators.required)
        })
      ]) 
  })
 

   get skills() {
    return this.userForm.get('skills') as FormArray;
  }


  addSkill() {
    this.skills.push(
      new FormGroup({
        name: new FormControl('', Validators.required)
      })
    );
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

}
