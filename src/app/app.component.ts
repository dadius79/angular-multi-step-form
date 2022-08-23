import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wizard-app1';

  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
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
  }

  submit(){
    this.userFormDetails = {...this.firstFormGroup.value, ...this.secondFormGroup.value};
    this.userService.adduser(this.userFormDetails);
    console.log(this.userFormDetails);
  }
}
