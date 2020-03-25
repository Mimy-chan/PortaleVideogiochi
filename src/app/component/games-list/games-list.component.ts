import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/interface/game-item.interface';
import { GameListService } from 'src/app/service/game-list.service';


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {


  constructor(private gameListService:GameListService) { 
    this.gameList=this.gameListService.gameList
  }

  ngOnInit(): void {
  }

  gameList:GameItem[];

}
