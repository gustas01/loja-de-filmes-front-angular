import { ImovieFormatDatabase } from "./imovie-format-database";

export interface IState {
    shoppingCart: ImovieFormatDatabase[],
    favorites: ImovieFormatDatabase[],
    movieNameSearch: string,
}
