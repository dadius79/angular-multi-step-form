import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-stepper-one',
  templateUrl: './stepper-one.component.html',
  styleUrls: ['./stepper-one.component.css']
})
export class StepperOneComponent implements OnInit {

  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  userFormDetails!: any;

  constructor(
    private _formBuilder: FormBuilder,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_address: ['', Validators.required],
      phone_number: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      country: ['', Validators.required],
      county: ['', Validators.required],
      sub_county: ['', Validators.required],
      constituency: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      preferences: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      dependants: this._formBuilder.array([])
    });
  }

  get dependants() {
    return this.fourthFormGroup.get('dependants') as FormArray;
   }

   newDependant(): FormGroup{
    return this._formBuilder.group({
      'first_name': '',
      'age': ''
    })
   }

   addDependant(){
    const dependant = new FormControl('');
    this.dependants.push(this.newDependant());
    //console.log(this.dependants.value);
   }

   removeDependant(index: number) {
    this.dependants.removeAt(index);
    //console.log(this.dependants.value);
   }

  submit(){
    this.userFormDetails = {...this.firstFormGroup.value, ...this.secondFormGroup.value, ...this.thirdFormGroup.value, ...this.fourthFormGroup.value};
    //this.userService.adduser(this.userFormDetails);
    console.log(this.userFormDetails);
  }

}
