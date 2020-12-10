import { Component, OnInit } from '@angular/core';

class Franchise {
  public id: number;
  public title: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public primaryPhone: string;
  public secondaryPhone?: string;
  public addressLine1: string;
  public addressLine2: string;
  public city: string;
  public state: string;
  public country: string;
  public postcode?: string;
  public noOfStudents: number;
  public noOfBatches: number;
}

@Component({
  selector: 'app-admin-franchise',
  templateUrl: './admin-franchise.component.html',
  styleUrls: ['./admin-franchise.component.css']
})
export class AdminFranchiseComponent implements OnInit {

  display = false;

  selectedFranchise: Franchise = null;

  data: Franchise [] = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        id: 111, title: 'Franchise 1',
        state: 'California', noOfStudents: 200, noOfBatches: 4,
        firstName: 'firstName', lastName: 'last name', email: 'test@test.com', primaryPhone: '123213233',
        addressLine1: 'line1', addressLine2: 'line2', city: 'city', country: 'USA'
      },
      {
        id: 222, title: 'Franchise 2',
        state: 'Texas', noOfStudents: 300, noOfBatches: 5,
        firstName: 'firstName', lastName: 'last name', email: 'test@test.com', primaryPhone: '123213233',
        addressLine1: 'line1', addressLine2: 'line2', city: 'city', country: 'USA'
      },
      {
        id: 333, title: 'Franchise 3',
        state: 'New York', noOfStudents: 400, noOfBatches: 6,
        firstName: 'firstName', lastName: 'last name', email: 'test@test.com', primaryPhone: '123213233',
        addressLine1: 'line1', addressLine2: 'line2', city: 'city', country: 'USA'
      },
      {
        id: 444, title: 'Franchise 4',
        state: 'New Jersy', noOfStudents: 250, noOfBatches: 4,
        firstName: 'firstName', lastName: 'last name', email: 'test@test.com', primaryPhone: '123213233',
        addressLine1: 'line1', addressLine2: 'line2', city: 'city', country: 'USA'
      },
    ];
  }

  openView(e) {
    this.display = true;
    this.selectedFranchise = e;
  }

  showMessage() {
    console.log('test');
  }

}

