import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ImovieFormatDatabase } from 'src/app/models/imovie-format-database';
import { IState } from 'src/app/models/istate';
import { RemoveFromFavorites } from 'src/app/store/actions/favorites.actions';
import { AddToCart } from 'src/app/store/actions/shoppingCart.actions';
import constants from 'src/app/utils/contansts';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites$!: Observable<ImovieFormatDatabase[]>
  shoppingCart$!: Observable<ImovieFormatDatabase[]>
  baseUrl = constants.baseURLImagesW45

  constructor(private store: Store<IState>, private userService: UserService) {
    this.favorites$ = store.select((state: IState) => state.favorites)
    this.shoppingCart$ = store.select((state: IState) => state.shoppingCart)
   }

  ngOnInit(): void { }

  removeFromFavorites(id: number){
    this.store.dispatch(RemoveFromFavorites({id}))
    this.favorites$.subscribe({
      next: res => this.userService.setFavorites(res).subscribe()
    })
  }

  addToCart(movie: ImovieFormatDatabase){
    this.store.dispatch(AddToCart(movie))
    this.shoppingCart$.subscribe({
      next: res => {
        this.userService.setShoppingCart(res).subscribe()
      }
    })
  }
}
