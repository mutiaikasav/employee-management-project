import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { EmployeeModel } from '../employee.model';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public formControl = new FormControl();
  public value: string | undefined;
  formValue !: FormGroup;

  employeeModelObj : EmployeeModel = new EmployeeModel();
  myDate = new Date();
  maxDate : Date | undefined;
  // public exampleData: Array<Select2OptionData> | undefined;


  constructor(private formbuilber: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.formValue = this.formbuilber.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      email: [''],
      birthDate: [''],
      basicSalary: [''],
      status: [''],
      group: ['']
    })
    // this.exampleData = [
    //   {
    //     id: 'groupA',
    //     text: 'group A'
    //   },
    //   {
    //     id: 'groupB',
    //     text: 'group B'
    //   },
    //   {
    //     id: 'groupC',
    //     text: 'group C'
    //   },
    //   {
    //     id: 'groupD',
    //     text: 'group D'
    //   },
    //   {
    //     id: 'groupE',
    //     text: 'group E'
    //   },
    //   {
    //     id: 'groupF',
    //     text: 'group F'
    //   },
    //   {
    //     id: 'groupG',
    //     text: 'group G'
    //   },
    //   {
    //     id: 'groupH',
    //     text: 'group H'
    //   },
    //   {
    //     id: 'groupI',
    //     text: 'group I'
    //   },
    //   {
    //     id: 'groupJ',
    //     text: 'group J'
    //   }
    // ];
  }

  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.username = this.formValue.value.username;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.birthDate = this.formValue.value.birthDate;
    this.employeeModelObj.basicSalary = this.formValue.value.basicSalary;
    this.employeeModelObj.status = this.formValue.value.status;
    this.employeeModelObj.group = this.formValue.value.group;

    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Added Successfully");
      this.formValue.reset();
    },
    err=>{
      alert("Something went wrong");
    })

  }
}
