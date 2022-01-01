import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Employee } from '../employee';
import { EmployeeModel } from '../employee.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router, public api: ApiService) { }
  val :any;
  employee!: Employee;
  ngOnInit(): void {
    let sub = this.route.params.subscribe(params=>{
      this.val = params['id'];
    })
    console.log("id"+this.val);
    this.api.getDetailEmployee(this.val).subscribe(data=>{
      this.employee = data;
    })
  }
  formatSalary(data:any){
    return "Rp "+data+",00";
  }
}
