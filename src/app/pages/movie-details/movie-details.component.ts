import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { IMovie } from 'src/app/models/imovie';
import { ImovieFormatDatabase } from 'src/app/models/imovie-format-database';
import { IState } from 'src/app/models/istate';
import { MovieService } from 'src/app/movies/services/movie.service';
import { AddToFavorites, RemoveFromFavorites } from 'src/app/store/actions/favorites.actions';
import { AddToCart, RemoveFromCart } from 'src/app/store/actions/shoppingCart.actions';
import { UserService } from 'src/app/user/services/user.service';
import constants from 'src/app/utils/contansts';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  public movie!: IMovie
  public trailerURL!: string
  public backgroundMovie!: string
  public posterImage!: string
  public inCart: boolean = false;
  public inFavorites: boolean = false;
  public relatedMovies!: IMovie[]
  private subscription!: Subscription
  shoppingCart$!: Observable<ImovieFormatDatabase[]>
  private shoppingCartArray!: ImovieFormatDatabase[]
  favorites$!: Observable<ImovieFormatDatabase[]>
  private favoritesArray!: ImovieFormatDatabase[]

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private store: Store<IState>, private userService: UserService) {
    this.favorites$ = store.select((state: IState) => state.favorites)
    this.shoppingCart$ = store.select((state: IState) => state.shoppingCart)
   }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {    
    this.subscription = this.activatedRoute.params.subscribe({
      next: res => {
        const id = res['id']
        this.loadContent(Number(id))   
        window.scrollTo(0,0) 
      }
    })

    
    this.shoppingCart$.subscribe({
      next: res => {
        this.shoppingCartArray = res 
      }})

    this.favorites$.subscribe({
      next: res => {
        this.favoritesArray = res
      }})
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


        //se o filme já estiver no carrinho, inCart = true, e o botão já inicia com o estilo
        this.inCart = this.shoppingCartArray.some(movie => movie.id === this.movie.id)
        
        //se o filme já estiver nos favoritos, inFavorites = true, e o coração já inicia vermelho
        this.inFavorites = this.favoritesArray.some(movie => movie.id === this.movie.id)
        
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
  

  addOrRemoveFromCart(){
    const filterMovieData = {
      id: this.movie.id,
      poster_path: this.movie.poster_path,
      title: this.movie.title
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


  addOrRemoveFromFavorites(){
    const filterMovieData = {
      id: this.movie.id,
      poster_path: this.movie.poster_path,
      title: this.movie.title
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
