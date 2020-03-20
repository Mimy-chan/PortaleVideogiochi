import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { GamesListComponent } from './component/games-list/games-list.component';
import { GameDetailComponent } from './component/game-detail/game-detail.component';
import { EditGameComponent } from './component/edit-game/edit-game.component';
import { LoginComponent } from './component/login/login.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gamesList', component: GamesListComponent },
  { path: 'editGame', component: EditGameComponent },
  { path: 'gameDetail', component: GameDetailComponent },
  { path: 'login', component: LoginComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GamesListComponent,
    GameDetailComponent,
    EditGameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
