import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/interface/game-item.interface';
import { GameListService } from 'src/app/service/game-list.service';
import { Genere, genereListDB } from 'src/app/interface/genere';
import { MyHttpService } from 'src/app/service/my-http.service';


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  gameList: GameItem[];

  genereList: Genere[] = genereListDB;
  genereSelezionato: number;

  constructor(private myHttp:MyHttpService) {}
  ngOnInit(): void {
    this.myHttp.getGames().subscribe(value=>{
     this.gameList=value;
    })
  }
  
}
