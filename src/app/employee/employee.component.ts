import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name: String = "Shreshth";
  id: Number = 1;
  salary: Number = 4200;
  department: String = "RFA";
  ngOnInit() {
  }

  constructor(private api: ApiService) {

  }
  onDelete() {
    console.log(this.api.deleteEmployeeUrlFunction());
    console.log("User Deleted");
  }
}
