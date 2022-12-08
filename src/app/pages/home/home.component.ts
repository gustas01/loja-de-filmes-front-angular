import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IMovie } from 'src/app/models/imovie';
import { MovieService } from 'src/app/movies/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies: Array<IMovie> = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    const movies = this.movieService.getMovies()
    const genres = this.movieService.getGenres()

    forkJoin([movies, genres]).subscribe({
      next: res => {
        this.movies = res[0].results

        this.movies.map(movie => movie.mainGenre = res[1].genres.filter(genre =>
          movie.genre_ids[0] === genre.id ? genre.name : null
        )[0]?.name)
      }
    })
    // this.movieService.getMovies(1).subscribe({
    //   next: res => {
    //     this.movies = res.results
    //     console.log(this.movies);
    //   }
    // })
  }

}
