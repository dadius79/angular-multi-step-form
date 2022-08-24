import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css']
})
export class TemplateOneComponent {

  dependantsForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dependantsForm = this.fb.group({
      dependants: this.fb.array([])
    })
   }

   get dependants() {
    return this.dependantsForm.get('dependants') as FormArray;
   }

   newDependant(): FormGroup{
    return this.fb.group({
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

   onSubmit(){
    console.log(this.dependantsForm.value);
   }

  /*ngOnInit(): void {
  }*/

}
