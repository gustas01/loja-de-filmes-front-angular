import { createAction, props } from "@ngrx/store";
import { IMovie } from "../models/imovie";

export const AddToCart = createAction('AddToCart', props<IMovie>())
export const RemoveFromCart = createAction('RemoveFromCart', props<IMovie>())
export const ClearCart = createAction('ClearCart')