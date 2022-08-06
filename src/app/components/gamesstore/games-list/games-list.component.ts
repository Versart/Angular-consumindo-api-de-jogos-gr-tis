import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { Game } from './model/game.interface';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: Game[] = []

  constructor(private gamesService: GamesService) {

   }

  ngOnInit(): void {
    this.getGames()
  }

  getGames() {
    this.gamesService.getGames().subscribe({
      next: gamesApi => {
        console.log(gamesApi)
        this.games = gamesApi;
      },
      error: err => {
        console.log('Erro',err);
      }
    })
  }

}
