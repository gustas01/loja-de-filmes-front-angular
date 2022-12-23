import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoadFavorites } from './store/actions/favorites.actions';
import { LoadShoppingCart } from './store/actions/shoppingCart.actions';
import { UserService } from './user/services/user.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private userService: UserService, private store: Store) {}

  loadShoppingCart$ = createEffect(() => this.actions$.pipe(
    ofType('[Load Content] Load shoppingCart'),
    mergeMap(() => this.userService.getShoppingCart().pipe(
      map(movies => LoadShoppingCart({shoppingCart: movies})),
      catchError(() => EMPTY)
    )
    )
  ))


  loadFavorites$ = createEffect(() => this.actions$.pipe(
    ofType('[Load Content] Load favorites'),
    mergeMap(() => this.userService.getFavorites().pipe(
      map(movies => LoadFavorites({favorites: movies})),
      catchError(() => EMPTY)
    )
    )
  ))
}
