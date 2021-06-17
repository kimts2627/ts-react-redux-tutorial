import { createReducer } from 'typesafe-actions';
import { CounterState, CounterAction } from './types';
import { increase, decrease, increaseBy } from './actions';

const initialState: CounterState = {
  count: 0
};

const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, state => ({ count: state.count + 1 }))
  .handleAction(decrease, state => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload
  }));

export default counter;
