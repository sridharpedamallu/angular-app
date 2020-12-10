import { Component, Input, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminFranchiseTimelineComponent } from '../admin-franchise-timeline/admin-franchise-timeline.component';


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
  selector: 'app-manage-frachise',
  templateUrl: './manage-frachise.component.html',
  styleUrls: ['./manage-frachise.component.css'],
  providers: [DialogService]
})
export class ManageFrachiseComponent implements OnInit {

  @Input() franchise: Franchise;
  events: any[];
  data: any;

  editMode = false;

  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
    this.events = [
      {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
      {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
      {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
      {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'},
      {status: 'Closed', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
  ];
    this.data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'SAT',
        borderColor: '#1E88E5',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'OCT',
        borderColor: '#7CB342',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };
  }

  hideModal() {
    console.log('modal closed');
  }

  showTimeline() {
    const ref = this.dialog.open(AdminFranchiseTimelineComponent, {
      header: 'Choose a Car',
      width: '70%',
      baseZIndex: 1000,
      autoZIndex: false
  });
  }

}
