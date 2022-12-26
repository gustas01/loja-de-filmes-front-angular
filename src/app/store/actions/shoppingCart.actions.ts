import { createAction, props } from "@ngrx/store";
import { ImovieFormatDatabase } from "src/app/models/imovie-format-database";

export const AddToCart = createAction('AddToCart', props<ImovieFormatDatabase>())
export const RemoveFromCart = createAction('RemoveFromCart', props<ImovieFormatDatabase>())
export const ClearCart = createAction('ClearCart')
export const LoadShoppingCart = createAction('LoadShoppingCart', props<{shoppingCart: ImovieFormatDatabase[]}>())

export const TriggerLoadShoppingCart = createAction('[Load Content] Load shoppingCart')