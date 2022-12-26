import { createReducer, on } from "@ngrx/store";
import { AddToCart, RemoveFromCart, ClearCart, LoadShoppingCart } from "../actions/shoppingCart.actions";
import { IMovie } from "../../models/imovie";
import { ImovieFormatDatabase } from "src/app/models/imovie-format-database";

export const initialstate: ImovieFormatDatabase[] = []


export const shoppingCartReducer = createReducer(
    initialstate,
    on(AddToCart, (state: ImovieFormatDatabase[], movie:ImovieFormatDatabase) => {
        const newState = [...state, movie]
        return newState}),
    on(RemoveFromCart, (state: ImovieFormatDatabase[], movie:ImovieFormatDatabase) => {
        let newState = [...state]
        newState = newState.filter(el => el.id !== movie.id)
        return newState
    }),
    on(ClearCart, () => {
        return []
    }),
    on(LoadShoppingCart, (state: ImovieFormatDatabase[], { shoppingCart }) => {
        return shoppingCart
    })
)