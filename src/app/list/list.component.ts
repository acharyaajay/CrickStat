import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { PlayerService } from '../player/player.service';
import { Player } from '../player/player';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [PlayerService],
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

   _list : Player;
  constructor(private _playerservice:PlayerService) { }

  ngOnInit() {
    this._playerservice.getPlayer(20).subscribe(data=>{
      this._list = data;
      console.log(this._list);
    
    });
  }

}
