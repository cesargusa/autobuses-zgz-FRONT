import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-incidents',
  templateUrl: './modal-incidents.component.html',
  styleUrls: ['./modal-incidents.component.css']
})
export class ModalIncidentsComponent {
  animal: string = '';
  name: string = '';
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor(public dialogRef: MatDialogRef<ModalIncidentsComponent>){}
  onClose(): void {
    this.dialogRef.close();
  }
}
