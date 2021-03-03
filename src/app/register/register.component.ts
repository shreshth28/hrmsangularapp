import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  registerId: string | undefined;
  registerPassword: string | undefined;
  name: string | undefined;
  salary: number | undefined;
  department: string | undefined;
  ngOnInit(): void {
  }

  onRegister() {
    this.onLogin();
  }

  onLogin() {
    this.router.navigateByUrl('/profile');
    console.log(this.registerId + "  ---- " + this.registerPassword);
    this.api.postLoginUrlFunction(this.registerId, this.registerPassword).subscribe(data => {
      console.log(data);
      this.api.jwtToken = data;
      this.api.postEmployeeCreateUrlFunction(this.name, this.department, this.salary).subscribe(data => {
        console.log(data);
      });
    });
  }

}
