import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[] = [];

  constructor(private employeeService:EmployeeService,private route:Router) {  }

  ngOnInit(): void {
   this.getEmployees();
  }

  getEmployees(){
      this.employeeService.getEmployeesList().subscribe(data =>{
        this.employees =data;
      })
  }

  updateEmployee(id:number){
    this.route.navigate(['update-employee',id])
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees();
      alert("delted successfully"+id)
    }
    )
  }

  employeeDetails(id:number){
    this.route.navigate(['employee-details',id])
  }

}
