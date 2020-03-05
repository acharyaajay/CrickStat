import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private   http : HttpClient) { }

  myList(){

    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
  getPlayers(){
    return this.http.get('http://localhost:8022/players');
  }
  getTeams(){
    return this.http.get('http://localhost:8022/teams');
  }
 
  getRoster(){
    return this.http.get('http://localhost:8022/rosters');
  }
}
