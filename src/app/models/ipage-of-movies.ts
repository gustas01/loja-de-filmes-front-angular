import { IMovie } from "./imovie";

export interface IPageOfMovies {
    page:number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}
