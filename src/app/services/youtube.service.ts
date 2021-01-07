import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { toUnicode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url:string="https://www.googleapis.com/youtube/v3";
  private apikey:string="[yourApiKey]";
  private canalId:string="UCjahao5wNhsCP5hd-J7Eb8g";

 

  constructor(private _http:HttpClient) { }

  obtenerVideos(){
    const parametros = new HttpParams().set('part', 'snippet').set('channelId', this.canalId).set('maxResults', '10').set('order','date').set('key', this.apikey);
    let url = `${this.url}/search`;
    return this._http.get(url,{params:parametros}).pipe(map(resp => resp));
  
  }

}

