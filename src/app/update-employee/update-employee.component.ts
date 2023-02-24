import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!:number;
  employee:Employee = new Employee();

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next:  (data) =>this.employee=data,
      error: (err)=> console.log(err)
    })
  }

  onSubmit(){
    this.employeeService.updateEmployeeById(this.id,this.employee).subscribe({
      next:(data)=>{
        this.goToEmployeeList()
        alert("updated successfully of : "+this.employee.firstName)
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
