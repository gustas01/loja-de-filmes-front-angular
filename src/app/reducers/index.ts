import { createReducer, on } from "@ngrx/store";
import { AddToCart, RemoveFromCart, ClearCart } from "../actions/shoppingCart.actions";
import { IMovie } from "../models/imovie";

export const initialstate: Array<IMovie> = []


export const shoppingCartReducer = createReducer(
    initialstate,
    on(AddToCart, (state: Array<IMovie>, movie:IMovie) => {
        const newState = [...state, movie]
        //mandar o newState para salvar no banco atualizando o carrinho do usuário, ou seja, chamar o put do carrinho passando newState
        return newState}),
    on(RemoveFromCart, (state: Array<IMovie>, movie:IMovie) => {
        let newState = [...state]
        newState = newState.splice(state.indexOf(movie), 1)
        return newState
    })
)