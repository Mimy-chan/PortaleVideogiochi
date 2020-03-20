import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { GamesListComponent } from './component/games-list/games-list.component';
import { GameDetailComponent } from './component/game-detail/game-detail.component';
import { EditGameComponent } from './component/edit-game/edit-game.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gamesList', component: GamesListComponent },
  { path: 'gameDetail', component: GameDetailComponent },
  { path: 'editGame', component: EditGameComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GamesListComponent,
    GameDetailComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
