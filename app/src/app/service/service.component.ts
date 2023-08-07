import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MODEL } from '../shared/util/constants';
import { DetailsService } from './details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  fields: any = [];
  model: Record<string, any> = MODEL;
  registerForm!: FormGroup;

  constructor(private detailsSerice: DetailsService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((res: any) => {
      console.log(res)
      if(res.name) {
        this.model = this.model[res.name];
      }
    })
    this.buildForm();
    this.selectedService();
  }

  selectedService() {
    this.detailsSerice.getSelectedService().subscribe((res) => {
      console.log("JOICEEeeeee", res)
    });

    const service = this.detailsSerice.getSelectedService();
    console.log(service)
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
      const validators = this.addValidator(fieldProps.rules)
      formControlFields[field] = new FormControl(fieldProps.value, validators);
      this.fields.push({...fieldProps, fieldName: field});
    }
    return formControlFields;
    console.log(formControlFields);
  }

  addValidator(rules: any): any {
    if(!rules) {
      return []
    } else {
      const validators = Object.keys(rules).map((rule) => {
        switch (rule) {
          case "required":
            return Validators.required;
            //add more cases for the future.
          default:
            return [];
        }
      });
      return validators;
    }

  }
}
