import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { PlayerService } from '../player/player.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../player/player';
import { TeamComponent } from '../team/team.component';
import { HttpService } from '../http.service';
import { CheckboxItem } from '../checkbox-group/CheckboxItem';


@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  providers: [PlayerService],
  styleUrls: ['./addplayer.component.scss']
})
export class AddplayerComponent implements OnInit {
  @ViewChild('playerForm',{static: false})public createPlayerForm: NgForm;
  panelTitle: string;
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  player:Player;
  team:Object;
  selectedTeam:Object;
  teamData =[];
  private userRoles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Director' },
    { id: 3, name: 'Professor' },
    { id: 4, name: 'Student'}
   ];

  userRolesOptions = new Array<CheckboxItem>();

  constructor(private _playerService: PlayerService,
    private _router: Router,
    private _route: ActivatedRoute,private _http:HttpService)
    {
      this.datePickerConfig = Object.assign({},
        {
          containerClass: 'theme-dark-blue',
          dateInputFormat: 'DD/MM/YYYY'
        });
   }
   togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      console.log("ID:"+id);
      this.getPlayer(id);      
    });
    this._http.getTeams().subscribe(data=>{
      this.team=data;
      console.log(data);
      } )

      this.userRolesOptions = this.userRoles.map(x => new CheckboxItem(x.id, x.name));
    
  }
  private getPlayer(id: number) {
    if (id === 0) {
      console.log("ID.."+id);
      this.player = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: '',
        dateOfBirth: null,
        active: null,
        photoPath: null,
      };
      this.panelTitle = 'Add Player';
      this.createPlayerForm.reset();
    } else {
      console.log("Update....");
      this.panelTitle = 'Update Player';
      this._playerService.getPlayer(id).subscribe(
        (player) => this.player = player,
        (err: any) => console.log(err)
      );
    }
  }
  savePlayer(): void {
  
    console.log(this.player);
    console.log(this.selectedTeam);
    // Display the key/value pairs
    console.log(this.createPlayerForm.value);

    if (this.player.id == null) {
      console.log("adding Player");
      this._playerService.addPlayer(this.player).subscribe(
        (data: Player) => {
          console.log(data);
          this.createPlayerForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    } else {
      console.log("Saving Player");
      this._playerService.updatePlayer(this.player).subscribe(
        () => {
          this.createPlayerForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    }
  }
}
