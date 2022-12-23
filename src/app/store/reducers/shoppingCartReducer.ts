import { createReducer, on } from "@ngrx/store";
import { AddToCart, RemoveFromCart, ClearCart, LoadShoppingCart } from "../actions/shoppingCart.actions";
import { IMovie } from "../../models/imovie";

export const initialstate: IMovie[] = []


export const shoppingCartReducer = createReducer(
    initialstate,
    on(AddToCart, (state: IMovie[], movie:IMovie) => {
        const newState = [...state, movie]
        return newState}),
    on(RemoveFromCart, (state: IMovie[], movie:IMovie) => {
        let newState = [...state]
        newState = newState.filter(el => el.id !== movie.id)
        return newState
    }),
    on(ClearCart, () => {
        return []
    }),
    on(LoadShoppingCart, (state: IMovie[], { shoppingCart }) => {
        return shoppingCart
    })
)