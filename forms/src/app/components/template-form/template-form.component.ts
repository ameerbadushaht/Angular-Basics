import { Component } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

    templateForm={
        name: '',
        email: '',
        password: ''
    }

    onSubmit(form:any){
        console.log(form);
    }
}
