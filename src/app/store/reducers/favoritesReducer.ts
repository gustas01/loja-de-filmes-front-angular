import { createReducer, on } from "@ngrx/store";
import { AddToFavorites, RemoveFromFavorites, ClearFavorites, LoadFavorites } from "../actions/favorites.actions";
import { IMovie } from "../../models/imovie";

export const initialstate: IMovie[] = []


export const favoritesReducer = createReducer(
    initialstate,
    on(AddToFavorites, (state: IMovie[], movie:IMovie) => {
        const newState = [...state, movie]
        return newState}),
    on(RemoveFromFavorites, (state: IMovie[], movie:IMovie) => {
        let newState = [...state]
        newState = newState.filter(el => el.id !== movie.id)
        return newState
    }),
    on(ClearFavorites, () => {
        return []
    }),
    on(LoadFavorites, (state: IMovie[], { favorites }) => {
        return favorites
    })
)