import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  loginId: String | undefined;
  loginPassword: String | undefined;
  getEmployeesUrl: string = 'http://localhost:8091/employees';
  jwtToken: string | undefined;

  postLoginUrl: string = 'http://localhost:8091/login';
  postEmployeeCreateUrl: string = 'http://localhost:8091/employee';

  deleteEmployeeUrl: string = 'http://localhost:8091/employee/202';
  constructor(private http: HttpClient) { }

  getEmployeesUrlFunction() {
    // const header = { headeres: new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`) }
    // return this.http.get(this.getEmployeesUrl);

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.jwtToken}`
    })
    console.log(this.jwtToken);
    return this.http.get(this.getEmployeesUrl, { headers: header });
  }



  postEmployeeCreateUrlFunction(name: string | undefined, department: string | undefined, salary: number | undefined) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.jwtToken}`
    })
    return (this.http.post(this.postEmployeeCreateUrl, { "name": name, "salary": salary, "department": department }, { headers: header }));
  }

  postLoginUrlFunction(loginId: String | undefined, loginPassword: String | undefined) {
    // this.loginId = loginId;
    // this.loginPassword = loginPassword;
    this.loginId = loginId;
    this.loginPassword = loginPassword;
    console.log(this.loginId + "  ---- " + this.loginPassword);
    return this.http.post<string>(this.postLoginUrl, { "id": this.loginId, "password": this.loginPassword }, { responseType: 'text' as 'json' });
  }

  deleteEmployeeUrlFunction() {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${this.jwtToken}`
    });
    // (this.http.delete(this.deleteEmployeeUrl, { headers: header }));
    this.http.delete(this.deleteEmployeeUrl)
      .subscribe((data) => {
        return data;
      });
  }
}
