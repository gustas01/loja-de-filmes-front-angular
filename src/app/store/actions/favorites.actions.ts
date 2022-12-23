import { createAction, props } from "@ngrx/store";
import { IMovie } from "../../models/imovie";

export const AddToFavorites = createAction('AddToFavorites', props<IMovie>())
export const RemoveFromFavorites = createAction('RemoveFromFavorites', props<IMovie>())
export const ClearFavorites = createAction('ClearFavorites')