import { IMovie } from "./imovie";
import { IGenres } from './igenres'

export interface IState {
    shoppingCart: Array<IMovie>,
    favorites: Array<IMovie>,
    movieNameSearch: string,
}
