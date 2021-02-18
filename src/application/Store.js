import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from '../application/reducers/auth.reducer';

const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
