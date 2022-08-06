import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Game } from './model/game.interface';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpCLient: HttpClient) { }
   options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': 'ddc7b7c3c9mshfaee9e9fd1779f7p1f1774jsne29bfee5a76d',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  }
   URLAPI = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
  getGames(): Observable<Game[]> {
    return  this.httpCLient.get<Game[]>(this.URLAPI,this.options);
  }
}
