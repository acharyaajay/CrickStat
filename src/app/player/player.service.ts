import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Player} from './player';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
      'Content-Type':  'application/json'
    })
  }
  @Injectable()
export class PlayerService {
  playerUrl = 'http://localhost:8022/players';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient) {
    //this.handleError = httpErrorHandler.createHandleError('PlayerService');
  }

  /** GET players from the server */
  getPlayers (): Observable<Player[]> {
    return this.http.get<Player[]>(this.playerUrl);
      
  }

  /** GET player from the server */
  getPlayer (id: number): Observable<Player> {
    return this.http.get<Player>(this.playerUrl+"/"+id);
      
  }
  /* GET player whose name contains search term */
  searchPlayer(term: string): Observable<Player[]> {
    term = term.trim();
    console.log(term);
    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('firstName', term) } : {};
    console.log(options);
    return this.http.get<Player[]>(this.playerUrl, options)
      .pipe(
        //catchError(this.handleError<Player[]>('searchPlayer', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new player to the database */
  addPlayer (player: Player): Observable<Player> {
    return this.http.post<Player>(this.playerUrl, player, httpOptions)
      
  }

  /** DELETE: delete the hero from the server 
  deleteHero (id: number): Observable<{}> {
    const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }*/

  updatePlayer(player: Player): Observable<void> {
    console.log(player.id);
    return this.http.put<void>(`${this.playerUrl}`, player, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        })
    })
        
}
}