import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-modal-incidents',
  templateUrl: './modal-incidents.component.html',
  styleUrls: ['./modal-incidents.component.css'],
})
export class ModalIncidentsComponent {
  inputCommentIncident:string = ""
  idTypeIncident:number = 0
  typeIncidents: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<ModalIncidentsComponent>,
    public http: HttpClient,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getTypeIncidents();
  }

  async getTypeIncidents() {
    const url = `${environment.urlBack}/api/Incidents`;
    await this.http.get<any>(url).subscribe((res) => {
      this.typeIncidents = [...res];
      console.log(this.typeIncidents);
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  createIncident(){
    const urlCreateIncident = `${environment.urlBack}/api/Incidents/CreateIncident`
    const bodyCreateIncident = {
      "IdTypeIncident":this.idTypeIncident,
      "IdUser":this.authService.getUserId(),
      "DescriptionIncident":this.inputCommentIncident
    }
    console.log(bodyCreateIncident)
    this.http.post(urlCreateIncident,bodyCreateIncident).subscribe((res) =>{
    })
  }
}
