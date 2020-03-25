import { Injectable } from '@angular/core';
import { GameItem } from '../interface/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor() { }


  gameList: GameItem[] = [

    {
      id: 1, name: 'Jump Force', genereId: 1
    },
    {
      id: 2, name: 'Dragon Ball Z: Kakarot', genereId: 1
    },
    {

      id: 3, name: 'Fifa', genereId: 2

    },
    {

      id: 4, name: 'Sword Art Online: Hollow Realizzation', genereId: 1

    },
    {

      id: 5, name: 'Dragon Ball XENOVERSE2', genereId: 1

    },
    {

      id: 6, name: 'Tokyo Ghoul: Re Call to EXIST', genereId: 1

    }
  ];


}
