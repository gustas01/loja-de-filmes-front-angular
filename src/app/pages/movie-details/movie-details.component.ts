import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public backgroundMovie!: string
  public posterImage!: string

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.movieService.getMovieById(Number(id)).subscribe({
      next: res => {
        this.movie = res
        this.backgroundMovie = 'url("' + constants.baseURLImagesOriginal + (this.movie.backdrop_path)?.toString() + '")'
        this.posterImage = constants.baseURLImagesW400 + this.movie.poster_path
      }
    })
    
    
  }


}
