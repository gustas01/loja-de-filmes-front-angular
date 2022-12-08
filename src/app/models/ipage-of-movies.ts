import { IMovie } from "./imovie";

export interface IPageOfMovies {
    page:number,
    results: Array<IMovie>,
    total_pages: number,
    total_results: number
}
