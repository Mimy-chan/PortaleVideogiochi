import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/interface/game-item.interface';
import { GameListService } from 'src/app/service/game-list.service';
import { Genere, genereListDB } from 'src/app/interface/genere';


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  gameList: GameItem[];

  genereList: Genere[] = genereListDB;
  genereSelezionato: number;

  constructor(private gameListService: GameListService) {
    this.gameList = this.gameListService.gameList
  }
  ngOnInit(): void {
  }
  selectChange(value) {
    this.genereSelezionato = Number(value)
  }
}
