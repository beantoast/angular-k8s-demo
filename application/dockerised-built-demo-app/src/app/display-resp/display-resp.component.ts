import { Component, OnInit } from '@angular/core';
import { of, throwError, interval } from 'rxjs';
import {RemotequeryService} from '../remotequery.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-display-resp',
  templateUrl: './display-resp.component.html',
  styleUrls: ['./display-resp.component.css']
})
export class DisplayRespComponent implements OnInit {
  msg = '';
  constructor(
    private remoteQuerySvc : RemotequeryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  displayQuery(){
    this.remoteQuerySvc.queryGet(`http://worldtimeapi.org/api/timezone/Australia/${this.router.url}`).subscribe(data => {
      //Not work with async since transaction is already ended
      //apm.setCustomContext({"test": "test", "anothertest": "aaa"});
      this.msg = "<table><tr><th>Key</th><th>Value</th></tr>"
      
      for(const k in data){
        this.msg += `<tr><td>${k}</td><td>${data[k]}</td></tr>`
      }
      this.msg += "</table>";
    });
  }
  
  clear() {
    this.msg = '';
  }

}
