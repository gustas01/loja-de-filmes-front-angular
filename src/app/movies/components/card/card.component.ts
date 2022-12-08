import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

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
  public urlMoviePoster: string = constants.baseURLImagesOriginal
  public months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];


  constructor() { }

  ngAfterViewInit(): void {
    const date = new Date(this.movie?.release_date)
    this.date.nativeElement.innerText = `${date.getDate()+1} de ${this.months[date.getMonth()]}, ${date.getFullYear()}`;
  }

  ngOnInit(): void {

  }



}
