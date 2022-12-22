import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs'
import { AddToCart, RemoveFromCart } from 'src/app/actions/shoppingCart.actions';

import { IMovie } from 'src/app/models/imovie';

import constants from 'src/app/utils/contansts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit  {
  shoppingCart$!: Observable<Array<IMovie>>
  private shoppingCartArray!: {shoppingCart: Array<IMovie>}

  @ViewChild('date') date!: ElementRef
  @Input() public movie!: IMovie

  public urlMoviePoster: string = constants.baseURLImagesW400
  public months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  public select: boolean = false;


  constructor(private router: Router, private store: Store<Array<IMovie>>) {
    this.shoppingCart$ = store.select((shoppingCart: Array<IMovie>) => shoppingCart)
   }

  ngAfterViewInit(): void {
    const date = new Date(this.movie?.release_date)
    this.date.nativeElement.innerText = `${date.getDate()+1} de ${this.months[date.getMonth()]}, ${date.getFullYear()}`;
  }

  ngOnInit(): void {
    this.shoppingCart$.subscribe({
      next: res => {
        this.shoppingCartArray = res as unknown as {shoppingCart: Array<IMovie>}
      }
    })

  }

  movieDetails(){
    this.router.navigate(['/details', `${this.movie.id}`])
  }

  addToCart(){
    if(this.shoppingCartArray.shoppingCart.filter(el => el.id === this.movie.id).length === 0){
      this.store.dispatch(AddToCart(this.movie))
      this.select = true 
    }
    else{
      this.store.dispatch(RemoveFromCart(this.movie))
      this.select = false      
    }
  }

}
