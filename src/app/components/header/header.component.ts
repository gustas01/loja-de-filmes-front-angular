import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ITokenPayload } from 'src/app/models/i-token-payload';
import { ImovieFormatDatabase } from 'src/app/models/imovie-format-database';
import { IState } from 'src/app/models/istate';
import { SearchService } from 'src/app/services/search.service';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public openFavorites: boolean = false
  public openShoppingCart: boolean = false
  public token: string = ''
  public user!: ITokenPayload

  private shoppingCart$!: Observable<ImovieFormatDatabase[]>
  private favorites$!: Observable<ImovieFormatDatabase[]>
  public shoppingCartLength: number = 0
  public favoritesLength: number = 0


  constructor(private userService: UserService, private searchService: SearchService, private store: Store<IState>) {
    this.shoppingCart$ = store.select((state: IState) => state.shoppingCart)
    this.favorites$ = store.select((state: IState) => state.favorites)
   }

  ngOnInit(): void {
    if(this.userService.getCookie('token')){
      this.token = this.userService.getCookie('token')
       this.user = this.userService.decodeToken(this.token)

       this.shoppingCart$.subscribe({
        next: res => {
          this.shoppingCartLength = res.length
        }
       })

       this.favorites$.subscribe({
        next: res => {
          this.favoritesLength = res.length
        }
       })
    }
    
    this.userService.changeCookieEmitter.subscribe(
      res => {
        if(res.token){
          this.token = res.token
          this.user = this.userService.decodeToken(this.token)
        }else{
          this.token = ''
        }
      }
    )
  } 

  

  submitNameMovie(form: NgForm ){
    //implementar chamanda na API que busca filme por nome
    // console.log(form.value.moviename);
    this.searchService.search(form.value.moviename)
  }

  logout(){
    this.userService.logout()
  }

  toggleFavoritesNav(){
    if(this.openShoppingCart) this.openShoppingCart = false
    this.openFavorites = !this.openFavorites
  }

  toggleShoppingCartNav(){
    if(this.openFavorites) this.openFavorites = false
    this.openShoppingCart = !this.openShoppingCart
  }

}
