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
import { LoginGuardService } from './service/login-guard.service';
import { LoginAdminGuardService } from './service/login-admin-guard.service';



const appRoutes: Routes = [
  
  { path: 'home', component: HomeComponent , canActivate: [LoginGuardService]},
  { path: 'gamesList', component: GamesListComponent ,canActivate: [LoginGuardService]},
  { path: 'gameDetail', component: GameDetailComponent,canActivate: [LoginGuardService] },
  { path: 'editGame', component: EditGameComponent,canActivate: [LoginAdminGuardService] },
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
