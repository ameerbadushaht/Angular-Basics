import { createSelector, State } from "@ngrx/store";
import { Appstate } from "../app.state";

export const selecttthecounterstate = (state : Appstate)=> state.counter

export const selectcount = createSelector(
    selecttthecounterstate,
    (state)=>state.count
)

