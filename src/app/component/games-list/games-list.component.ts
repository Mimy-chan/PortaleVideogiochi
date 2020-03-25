import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/interface/game-item.interface';


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}
