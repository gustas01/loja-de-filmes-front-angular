import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs'
import { IPageOfMovies } from 'src/app/models/ipage-of-movies';

import { environment } from 'src/environments/environment';
import { MoviesModule } from '../movies.module';
import { IGenres } from 'src/app/models/igenres';
import { IMovie } from 'src/app/models/imovie';

@Injectable({
  providedIn: MoviesModule
})
export class MovieService {

  private urlGenres = `${environment.baseUrl}/genres`

  constructor(private http: HttpClient) { }

  public getMovies(page:number = 1): Observable<IPageOfMovies>{
    return this.http.get<IPageOfMovies>(`${environment.baseUrl}/${page}`)
  }

  public getGenres(): Observable<IGenres>{
    return this.http.get<IGenres>(`${environment.baseUrl}/genres`)
  }

  public getMovieById(id: number): Observable<IMovie>{
    return this.http.get<IMovie>(`${environment.baseUrl}/search/${id}`)
  }
}
