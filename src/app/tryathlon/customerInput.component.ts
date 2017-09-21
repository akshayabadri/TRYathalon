import {Component,OnInit} from '@angular/core';
import {FormGroup , FormBuilder,Validators} from '@angular/forms';
@Component({
    moduleId:module.id,
    templateUrl:'customerInput.html',
    selector:'customer-input'

})
export class CustomerInputComponent implements OnInit{
  
   customerForm: FormGroup;
    customer: any;
    message: string;
    submitted:Boolean;
    constructor(private formBuilder: FormBuilder) {


            this.customerForm = this.formBuilder.group({
            'custId': [null, Validators.required ],
            'amount':[null,Validators.required,Validators.minLength(5)]
        });
     }

    ngOnInit()
    {
        this.submitted=false;
    }


    
    onSubmit()
    {
         this.submitted=!this.submitted;

    }
}


