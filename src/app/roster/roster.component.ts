import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  _list:Object;
  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getRoster().subscribe(data=>
      {
        this._list=data;
        console.log(this._list);
      })
  }

}
