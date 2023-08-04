import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MODEL } from '../shared/util/constants';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  fields: any = [];
  model: Record<string, any> = MODEL;
  registerForm!: FormGroup;
  // registerForm: FormGroup = new FormGroup({
  //     'name': new FormControl(''),
  //     'lastName': new FormControl(''),
  //     'address': new FormControl(''),
  //     'age': new FormControl(''),
  // });

  constructor() {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    const formFields = this.getFormControlFields();
    this.registerForm = new FormGroup(formFields);
  }

  getFormControlFields() {
    const formControlFields: Record<string, FormControl> = {};
    console.log(this.model)
    for (const field of Object.keys(this.model)) {
      console.log(field);

      const fieldProps = this.model[field];
      formControlFields[field] = new FormControl(fieldProps.value);
      this.fields.push({...fieldProps, fieldName: field});
    }
    return formControlFields;
    console.log(formControlFields);
  }
}
