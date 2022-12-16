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

  constructor(private http: HttpClient) { }

  public getMovies(page:number = 1): Observable<IPageOfMovies>{
    return this.http.get<IPageOfMovies>(`${environment.baseUrl}/${page}`)
  }

  public getGenres(): Observable<IGenres>{
    return this.http.get<IGenres>(`${environment.baseUrl}/genres`)
  }

  public getGenreById(id: number): Observable<string>{
    return this.http.get<string>(`${environment.baseUrl}/genres/${id}`)
  }

  public getMovieById(id: number): Observable<IMovie>{
    return this.http.get<IMovie>(`${environment.baseUrl}/search/${id}`)
  }

  public getTrailer(id: number): Observable<string>{
    return this.http.get<string>(`${environment.baseUrl}/trailer/${id}`)
  }

  public getRelated(id: number): Observable<IPageOfMovies>{
    return this.http.get<IPageOfMovies>(`${environment.baseUrl}/related/${id}`)
  }
}
