import { createReducer, on } from "@ngrx/store";
import { AddToFavorites, RemoveFromFavorites, ClearFavorites } from "../actions/favorites.actions";
import { IMovie } from "../models/imovie";

export const initialstate: Array<IMovie> = []


export const favoritesReducer = createReducer(
    initialstate,
    on(AddToFavorites, (state: Array<IMovie>, movie:IMovie) => {
        const newState = [...state, movie]
        //mandar o newState para salvar no banco atualizando o carrinho do usuário, ou seja, chamar o put do carrinho passando newState
        return newState}),
    on(RemoveFromFavorites, (state: Array<IMovie>, movie:IMovie) => {
        let newState = [...state]
        newState = newState.filter(el => el.id !== movie.id)
        return newState
    })
)