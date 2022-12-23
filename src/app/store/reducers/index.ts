import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { favoritesReducer } from './favoritesReducer';
import { shoppingCartReducer } from './shoppingCartReducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
    shoppingCart: shoppingCartReducer,
    favorites: favoritesReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
