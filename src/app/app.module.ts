import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { GamesstoreComponent } from './components/gamesstore/gamesstore.component';
import { FiltersComponent } from './components/gamesstore/filters/filters.component';
import { GamesListComponent } from './components/gamesstore/games-list/games-list.component';
import { GameItemComponent } from './components/gamesstore/games-list/game-item/game-item.component';
import { GamesService } from './components/gamesstore/games-list/games.service';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    GamesstoreComponent,
    FiltersComponent,
    GamesListComponent,
    GameItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
