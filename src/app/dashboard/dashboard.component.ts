import { Employee } from 'src/app/models/employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  employee!: Employee;

  constructor() {
    this.employee = JSON.parse(sessionStorage.getItem('currentUser')|| '{}');
    this.isDirector();
  }

  isDirector(): boolean{
    const employee = JSON.parse(sessionStorage.getItem('currentUser')|| '{}');
    if (employee.role !== 'director') {
      return false;
    } else {  
      return true;
    }
  }
}
