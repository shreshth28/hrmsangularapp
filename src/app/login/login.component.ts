import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId: string | undefined;
  loginPassword: string | undefined;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigateByUrl('/profile');
    console.log(this.loginId + "  ---- " + this.loginPassword);
    this.api.postLoginUrlFunction(this.loginId, this.loginPassword).subscribe(data => {
      console.log(data);
      this.api.jwtToken = data;
    });
  }


}
