import { Location } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/imovie';
import constants from 'src/app/utils/contansts';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public movie = this.location.getState() as IMovie
  public backgroundMovie: string = 'url("' + constants.baseURLImagesOriginal + (this.movie.backdrop_path)?.toString() + '")'
  public posterImage: string = constants.baseURLImagesW400 + this.movie.poster_path

  constructor(private location: Location) { }

  ngOnInit(): void {console.log(this.movie);
  }


}
