import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private myHttp:HttpClient) { }

  getGames():Observable<any>{
    return this.myHttp.get('http://localhost:3000/games');

  }
}
