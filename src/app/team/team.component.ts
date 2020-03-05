import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  _list:Object;

  constructor(private _http:HttpService) {

   }

  ngOnInit() {
    this._http.getTeams().subscribe(data=>{
      this._list=data;
      console.log(data);
      } )
  }


}
