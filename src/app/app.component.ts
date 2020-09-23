import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  serverData: JSON;
  employeeData: string [];
  employee:JSON;
  value:JSON;


  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }

  getAllEmployees() {
    this.httpClient.get('http://127.0.0.1:5002/employees').subscribe(data => {
      this.employeeData = data as string [];
      console.log(this.employeeData);
    })
  }
  getEmployee() {
    this.httpClient.get('http://127.0.0.1:5002/employee/yassar').subscribe(data => {
      this.employee = data as JSON;
      console.log(this.employee);

    })
  }
  onEnter(value: string) {
    this.httpClient.get('http://127.0.0.1:5002/employee/'+value).subscribe(data => {
      this.value = data as JSON;
    })
  }
}
