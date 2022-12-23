import { createReducer, on } from "@ngrx/store";
import { AddToCart, RemoveFromCart, ClearCart } from "../actions/shoppingCart.actions";
import { IMovie } from "../../models/imovie";

export const initialstate: IMovie[] = []


export const shoppingCartReducer = createReducer(
    initialstate,
    on(AddToCart, (state: IMovie[], movie:IMovie) => {
        const newState = [...state, movie]
        //mandar o newState para salvar no banco atualizando o carrinho do usuário, ou seja, chamar o put do carrinho passando newState
        return newState}),
    on(RemoveFromCart, (state: IMovie[], movie:IMovie) => {
        let newState = [...state]
        newState = newState.filter(el => el.id !== movie.id)
        return newState
    })
)