import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs'
import { AddToFavorites, RemoveFromFavorites } from 'src/app/actions/favorites.actions';
import { AddToCart, RemoveFromCart } from 'src/app/actions/shoppingCart.actions';

import { IMovie } from 'src/app/models/imovie';
import { IState } from 'src/app/models/istate';

import constants from 'src/app/utils/contansts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit  {
  private shoppingCart$!: Observable<IMovie[]>
  private shoppingCartArray!: IMovie[]
  private favorites$!: Observable<IMovie[]>
  private favoritesArray!: IMovie[]

  @ViewChild('date') date!: ElementRef
  @Input() public movie!: IMovie

  public urlMoviePoster: string = constants.baseURLImagesW400
  public months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  public inCart: boolean = false;
  public inFavorites: boolean = false;

  constructor(private router: Router, private store: Store<IState>) {
    this.shoppingCart$ = store.select((state: IState) => state.shoppingCart)
    this.favorites$ = store.select((state: IState) => state.favorites)
   }

  ngOnInit(): void {
    this.shoppingCart$.subscribe({
      next: res => this.shoppingCartArray = res})

    this.favorites$.subscribe({
      next: res => this.favoritesArray = res})
  }

  ngAfterViewInit(): void {
    const date = new Date(this.movie?.release_date)
    this.date.nativeElement.innerText = `${date.getDate()+1} de ${this.months[date.getMonth()]}, ${date.getFullYear()}`;
  }



  movieDetails(){
    this.router.navigate(['/details', `${this.movie.id}`])
  }

  addOrRemoveFromCart(event: Event){
    event.stopPropagation()
    if(this.shoppingCartArray.filter(el => el.id === this.movie.id).length === 0){
      this.store.dispatch(AddToCart(this.movie))
      this.inCart = true 
    }
    else{
      this.store.dispatch(RemoveFromCart(this.movie))
      this.inCart = false      
    }
  }


  addOrRemoveFromFavorites(event: Event){
    event.stopPropagation()
    if(this.favoritesArray.filter(el => el.id === this.movie.id).length === 0){
      this.store.dispatch(AddToFavorites(this.movie))
      this.inFavorites = true 
    }
    else{
      this.store.dispatch(RemoveFromFavorites(this.movie))
      this.inFavorites = false      
    }
  }

}
