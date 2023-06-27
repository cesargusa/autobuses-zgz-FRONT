import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import {ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-modal-incidents',
  templateUrl: './modal-incidents.component.html',
  styleUrls: ['./modal-incidents.component.css'],
})
export class ModalIncidentsComponent {
  inputCommentIncident: string = '';
  idTypeIncident: number = 0;
  typeIncidents: any[] = [];
  isLoadingTypeIncidents: boolean = false;
  isLoadingCreateIncident: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ModalIncidentsComponent>,
    public http: HttpClient,
    public authService: AuthService,
    public toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.idTypeIncident =1
    this.getTypeIncidents();
  }

  async getTypeIncidents() {
    this.isLoadingTypeIncidents = true;
    const url = `${environment.urlBack}/api/Incidents`;
    await this.http.get<any>(url).subscribe((res) => {
      this.typeIncidents = [...res];
      console.log(this.typeIncidents);
      this.isLoadingTypeIncidents = false;
    });

  }

  onClose(): void {
    this.dialogRef.close();
  }

  createIncident() {
    this.isLoadingCreateIncident = true;
    const urlCreateIncident = `${environment.urlBack}/api/Incidents/CreateIncident`;
    const bodyCreateIncident = {
      IdTypeIncident: this.idTypeIncident,
      IdUser: this.authService.getUserId(),
      DescriptionIncident: this.inputCommentIncident,
    };
    console.log(bodyCreateIncident);
    this.http
      .post(urlCreateIncident, bodyCreateIncident)
      .subscribe((res) => {
        console.log("Incidencia creada")
        this.toastr.success(
          `Incidencia Creada`,
          'Se ha creado correctamente',
          {
            positionClass: 'toast-bottom-left',
            timeOut: 2000,
          }
        );
        this.isLoadingCreateIncident =false
        this.onClose()
      });
  }
}
