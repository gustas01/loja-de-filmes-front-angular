import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IMovie } from 'src/app/models/imovie';
import { MovieService } from 'src/app/movies/services/movie.service';
import constants from 'src/app/utils/contansts';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public movie!: IMovie
  public trailerURL!: string
  public backgroundMovie!: string
  public posterImage!: string
  public select: boolean = false;
  public relatedMovies!: IMovie[]

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {    
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.loadContent(Number(id))    
  }

  loadContent(id: number){
    const movieById$ = this.movieService.getMovieById(Number(id))
    const trailer$ = this.movieService.getTrailer(Number(id))
    
    forkJoin([movieById$, trailer$]).subscribe({
      next: res => {
        this.movie = res[0]
        this.trailerURL = res[1]
        this.backgroundMovie = 'url("' + constants.baseURLImagesOriginal + (this.movie.backdrop_path)?.toString() + '")'
        this.posterImage = constants.baseURLImagesW400 + this.movie.poster_path
        this.movie.mainGenre = this.movie.genres[0].name;
        
      },
      error: err => {
        console.log(err);
        
      }
    })

    this.movieService.getRelated(Number(id)).subscribe({
      next: res => {
        this.relatedMovies = res.results
      }
     })
  }

  getMovieFromRelated(id: number){
    this.loadContent(id)
    window.scrollTo(0,0)
  }

  

}
