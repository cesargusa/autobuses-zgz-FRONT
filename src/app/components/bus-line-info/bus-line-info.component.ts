import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BusLineInfo } from 'src/app/model/bus-line-info';
import * as moment from 'moment';

import { BusLineInfoService } from './bus-line-info.service';
@Component({
  selector: 'app-bus-line-info',
  templateUrl: './bus-line-info.component.html',
  styleUrls: ['./bus-line-info.component.css'],
})
export class BusLineInfoComponent implements OnInit {
  lineId: string = '';
  busLineInfoCoordinates: BusLineInfo[] = [];
  totalCount: number = 0;
  lastUpdated: string = '';
  description: string = '';
  title: string = '';
  titleSort: string[] = [];
  spinnerTrue: boolean = false;
  busLines:[] = []
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private busLineService: BusLineInfoService
  ) {}

  ngOnInit(): void {
    this.lineId = this.route.snapshot.paramMap.get('lineId') || '';
    if (!this.lineId) {
      this.router.navigate(['/']);
    } else {
      // aquí puedes hacer lo que necesites con el parámetro
    }
    console.log(this.lineId);
    this.getLineInfo();
  }

  getLineInfo() {
    this.busLineService.GetLineInfo(this.lineId).subscribe((res) => {
      this.busLines = res.result
      console.log(this.busLines);
      this.totalCount = res.totalCount;
      this.lastUpdated = moment(res.lastUpdated).format('DD/MM/YYYY hh:mm:ss');
      this.description = res.description;
      this.title = res.title;
    });
  }
  migasPan() {}
}
