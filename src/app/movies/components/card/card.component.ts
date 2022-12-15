import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { IMovie } from 'src/app/models/imovie';

import constants from 'src/app/utils/contansts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit  {
  @ViewChild('date') date!: ElementRef

  @Input() public movie!: IMovie
  public urlMoviePoster: string = constants.baseURLImagesW400
  public months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  public select: boolean = false;


  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    const date = new Date(this.movie?.release_date)
    this.date.nativeElement.innerText = `${date.getDate()+1} de ${this.months[date.getMonth()]}, ${date.getFullYear()}`;
  }

  ngOnInit(): void {

  }

  movieDetails(){
    this.router.navigate(['/details', `${this.movie.id}`])
  }

}
