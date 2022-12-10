import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/imovie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public movie = this.location.getState() as IMovie

  constructor(private location: Location) { }

  ngOnInit(): void {}

}
