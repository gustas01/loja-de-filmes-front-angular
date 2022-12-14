import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs'
import { AddToFavorites, RemoveFromFavorites } from 'src/app/store/actions/favorites.actions';
import { AddToCart, RemoveFromCart } from 'src/app/store/actions/shoppingCart.actions';

import { IMovie } from 'src/app/models/imovie';
import { IState } from 'src/app/models/istate';

import constants from 'src/app/utils/contansts';
import { UserService } from 'src/app/user/services/user.service';
import { ImovieFormatDatabase } from 'src/app/models/imovie-format-database';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit  {
  private shoppingCart$!: Observable<ImovieFormatDatabase[]>
  private shoppingCartArray!: ImovieFormatDatabase[]
  private favorites$!: Observable<ImovieFormatDatabase[]>
  private favoritesArray!: ImovieFormatDatabase[]

  @ViewChild('date') date!: ElementRef
  @Input() public movie!: IMovie

  public urlMoviePoster: string = constants.baseURLImagesW400
  public months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  public inCart: boolean = false;
  public inFavorites: boolean = false;

  constructor(private router: Router, private store: Store<IState>, private userService: UserService) {
    this.shoppingCart$ = store.select((state: IState) => state.shoppingCart)
    this.favorites$ = store.select((state: IState) => state.favorites)
   }

  ngOnInit(): void {
    this.shoppingCart$.subscribe({
      next: res => {
        this.shoppingCartArray = res
        this.inCart = this.shoppingCartArray.some(movie => movie.id === this.movie.id)
      }})

    this.favorites$.subscribe({
      next: res => {
        this.favoritesArray = res
        this.inFavorites = this.favoritesArray.some(movie => movie.id === this.movie.id)
      }})
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

    const filterMovieData = {
      id: this.movie.id,
      poster_path: this.movie.poster_path,
      title: this.movie.title,
      price: 10
    }

    if(!this.shoppingCartArray.some(el => el.id === this.movie.id)){
      this.store.dispatch(AddToCart(filterMovieData))  
      this.inCart = true 
    }
    else{
      this.store.dispatch(RemoveFromCart({id: filterMovieData.id}))
      this.inCart = false      
    }

    this.userService.setShoppingCart([...this.shoppingCartArray]).subscribe();
  }


  addOrRemoveFromFavorites(event: Event){
    event.stopPropagation()

    const filterMovieData = {
      id: this.movie.id,
      poster_path: this.movie.poster_path,
      title: this.movie.title,
      price: 10
    }

    if(!this.favoritesArray.some(el => el.id === this.movie.id)){
      this.store.dispatch(AddToFavorites(filterMovieData))
      this.inFavorites = true 
    }
    else{
      this.store.dispatch(RemoveFromFavorites({id: filterMovieData.id}))
      this.inFavorites = false      
    }
    this.userService.setFavorites([...this.favoritesArray]).subscribe();
  }

}
