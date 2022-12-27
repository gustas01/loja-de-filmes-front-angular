import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IMovie } from 'src/app/models/imovie';
import { MovieService } from 'src/app/movies/services/movie.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies: IMovie[] = []

  constructor(private movieService: MovieService, private searchService: SearchService) {
    searchService.movieNameSearchObservable$.subscribe({
      next: res => {
        //res é o nome do filme pesquisado
        this.movieService.getSearchedMovie(res).subscribe({
          next: res => this.movies = res.results
          
        })
      }
    })
   }

  ngOnInit(): void {
    const getMovies = this.movieService.getMovies()
    const getGenres = this.movieService.getGenres()

    forkJoin([getMovies, getGenres]).subscribe({
      next: res => {
        this.movies = res[0].results

        this.movies.map(movie => movie.mainGenre = res[1].genres.filter(genre =>
          movie.genre_ids[0] === genre.id ? genre.name : null
        )[0]?.name)
      }
    })
  }

}
