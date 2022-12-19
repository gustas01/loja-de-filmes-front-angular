import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { IMovie } from 'src/app/models/imovie';
import constants from 'src/app/utils/contansts';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() public relatedMovies!: IMovie[]

  baseURLImagesW400: string = constants.baseURLImagesW400
  paused = false;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.relatedMovies = this.relatedMovies.filter(movie => movie.backdrop_path !== null)
  }



  togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}
}
