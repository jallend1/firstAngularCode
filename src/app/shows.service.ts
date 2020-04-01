import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from 'src/assets//model/show.model';
@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(
    private httpClient: HttpClient
  ) {   }

  getShows() {
    this.httpClient
      .get<Array<Show>>('http://localhost:4200/api/shows')
      .subscribe(shows => this.shows$.next(shows));
      return this.shows$.asObservable();
  }

  toggleFavorite(id, isFavorite){
    const url = isFavorite 
    ? 'http://localhost:4200/api/shows/${id}/favorite'
    : 'http://localhost:4200/api/shows/${id}/unfavorite';

    return this.httpClient.post(url, {});
  }
}
