import { createAction, props } from "@ngrx/store";
import { ImovieFormatDatabase } from "src/app/models/imovie-format-database";
import { IMovie } from "../../models/imovie";

export const AddToFavorites = createAction('AddToFavorites', props<ImovieFormatDatabase>())
export const RemoveFromFavorites = createAction('RemoveFromFavorites', props<{id: number}>())
export const ClearFavorites = createAction('ClearFavorites')
export const LoadFavorites = createAction('LoadFavorites', props<{favorites: ImovieFormatDatabase[]}>())

export const TriggerLoadFavorites = createAction('[Load Content] Load favorites')