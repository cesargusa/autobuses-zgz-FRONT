import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BusLineInfoResult } from 'src/app/model/bus-line-result';
import { AuthService } from 'src/app/services/auth.service';
import { ModalInfoPostComponent } from '../modal-info-post/modal-info-post.component';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {
  userId: number = 0;
  email: string = '';
  createDate: string = '';
  lastConnection: string = '';
  username: string = '';
  password: string = '';
  isActive: boolean = false;

  @Input() busLines: BusLineInfoResult[] | undefined;
  @Input() about: string | undefined;
  @Input() description: string | undefined;



  constructor(private dialog: MatDialog,
    ) {
    

  }

openDialog(): void {
  const data = {
    about: this.about,
    description : this.description // Los datos que quieres pasar al modal
    // ... otros datos que quieras pasar
  };
  const dialogRef = this.dialog.open(ModalInfoPostComponent, {
    data
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });

}


}


