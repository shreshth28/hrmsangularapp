import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit {

  employees: any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.api.getEmployeesUrlFunction().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

}
