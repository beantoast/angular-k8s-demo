import { Injectable } from '@angular/core';
import { ApmModule, ApmService } from '@elastic/apm-rum-angular'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppsettingsService {
  private apmsvc;
  private apm: any;
  constructor(
    service: ApmService
  ) {
    this.apmsvc = service;
  }

  initApm(){}

  getApmInstance(){
    return this.apm;
  }
}
