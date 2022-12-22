import { createAction, props } from "@ngrx/store";
import { IMovie } from "../models/imovie";

export const AddToCart = createAction('Add', props<IMovie>())
export const RemoveFromCart = createAction('Remove', props<IMovie>())
export const ClearCart = createAction('Clear')