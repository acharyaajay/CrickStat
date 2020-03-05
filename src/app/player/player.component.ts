import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  providers: [PlayerService],
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  players: Player[];
  editPlayer: Player;
  selcted:Player;
  selectedOption:Player;
  constructor(private playerService:PlayerService,
    private _router: Router,
    private _route: ActivatedRoute) {}

  ngOnInit() {
    this.getPlayers();
  }
  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  }
  getPlayers(){
    this.playerService.getPlayers()
    .subscribe(players => 
      {
        console.log(players);
        this.players = players
      }
      );
  }
  public CalculateAge(bd: Date ): number
     {
         if(bd){
            var timeDiff = Math.abs(Date.now() - bd.getTime());
            console.log(timeDiff);
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            var age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
            return age;
        }
        return 0;
    }
  /*add(firstName: string,lastName: string , email: string): void {
    this.editPlayer = undefined;
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    
    if (!firstName) {
      return;
    }
    // The server will generate the id for this new hero
    const newPlayer: Player = { email,firstName,lastName } as Player;
    this.playerService
      .addPlayer(newPlayer)
      .subscribe(player => 
       {
        console.log(player);
         this.players.push(player)
        
        });

 }*/
 addPlayer(id:number): void{
      this._router.navigate(['addplayer/'+id]);
 }
 search(searchTerm: string) {
  this.editPlayer = undefined;
  if (searchTerm) {
    this.playerService
      .searchPlayer(searchTerm)
      .subscribe(players => {
        this.players = players;
        console.log(players);
      }
        
        );
  }
}
}
