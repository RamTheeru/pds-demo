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
  constructor(private _fb:FormBuilder) {
     this.initForm();
    this.addCheckboxes();
   }

  ngOnInit() {
   
    //this.addCheckboxes();
  }

initForm(){
  this.empForm = this._fb.group({
   // firstName: new FormControl(),
      mars:new FormArray([])
    });
}
 get maritalsFormArray() {
    return this.empForm.controls.mars as FormArray;
  }
 private addCheckboxes() {
    this.maritals.forEach(() => this.maritalsFormArray.push(new FormControl(false)));
  }
  onSubmit(){
    const selectedmaritals = this.empForm.value.mars
      .map((checked, i) => checked ? this.maritals[i].name : null)
      .filter(v => v !== null);
      console.log('checkboxes')
    console.log(selectedmaritals);
  }
}