import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset } from "./counter.action"



export interface counterState {
  count: number

}

export const initialisecounterstate :counterState = {
  count : 0
}

export const counterReducer = createReducer(
  initialisecounterstate,
  on(increment, state=> ({...state, count: state.count +1})),
  on(decrement, state=> ({...state, count: state.count -1})),
  on(reset, state=> ({...state, count: 0})),
)