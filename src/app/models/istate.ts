import { IMovie } from "./imovie";

export interface IState {
    shoppingCart: IMovie[],
    favorites: IMovie[],
    movieNameSearch: string,
}
