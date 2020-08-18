import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,FormArray,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
dates =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
empForm : FormGroup;
  maritals = [
    { id: 0, name: 'Married' },
    { id: 1, name: 'Un Married' }

  ];
    empTypes = [
    { id: 0, name: 'Permanent' },
    { id: 1, name: 'Contract' }

  ];
  constructor(private _fb:FormBuilder) {
     this.initForm();
    this.addCheckboxes();
    this.addCheckboxes_t();
   }

  ngOnInit() {
   
    //this.addCheckboxes();
  }

initForm(){
  this.empForm = this._fb.group({
    firstName: new FormControl(),
    lastName: new FormControl(),
    middleName: new FormControl(),
     day: new FormControl(),
      month: new FormControl(),
       year: new FormControl(),
        age: new FormControl(),
        bg: new FormControl(),
         gender: new FormControl(),
      mars:new FormArray([]),
       ad1: new FormControl(),
        ad2: new FormControl(),
         place: new FormControl(),
          state: new FormControl(),
           postal: new FormControl(),
            aad: new FormControl(),
        pan: new FormControl(),
        typs : new FormArray([]),
    });
}
 get maritalsFormArray() {
    return this.empForm.controls.mars as FormArray;
  }
 private addCheckboxes() {
    this.maritals.forEach(() => this.maritalsFormArray.push(new FormControl(false)));
  }
   private addCheckboxes_t() {
    this.empTypes.forEach(() => this.maritalsFormArray.push(new FormControl(false)));
  }
   get typsFormArray() {
    return this.empForm.controls.typs as FormArray;
  }
  onSubmit(){
    const selectedmaritals = this.empForm.value.mars
      .map((checked, i) => checked ? this.maritals[i].name : null)
      .filter(v => v !== null);
      console.log('checkboxes')
    console.log(selectedmaritals);
  }
}