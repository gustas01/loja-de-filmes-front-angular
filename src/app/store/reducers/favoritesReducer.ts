import { createReducer, on } from "@ngrx/store";
import { AddToFavorites, RemoveFromFavorites, ClearFavorites, LoadFavorites } from "../actions/favorites.actions";
import { IMovie } from "../../models/imovie";
import { ImovieFormatDatabase } from "src/app/models/imovie-format-database";

export const initialstate: ImovieFormatDatabase[] = []


export const favoritesReducer = createReducer(
    initialstate,
    on(AddToFavorites, (state: ImovieFormatDatabase[], movie:ImovieFormatDatabase) => {
        const newState = [...state, movie]
        return newState}),
    on(RemoveFromFavorites, (state: ImovieFormatDatabase[], {id}) => {
        let newState = [...state]
        newState = newState.filter(el => el.id !== id)
        return newState
    }),
    on(ClearFavorites, () => {
        return []
    }),
    on(LoadFavorites, (state: ImovieFormatDatabase[], { favorites }) => {
        return favorites
    })
)