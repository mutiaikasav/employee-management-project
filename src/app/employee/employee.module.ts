import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MaterialDesign } from '../materials/material';
import { DataTablesModule } from 'angular-datatables';
import { NewComponent } from './new/new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent 
      },
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    EmployeeComponent,
    ListComponent,
    NewComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MaterialDesign,
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
