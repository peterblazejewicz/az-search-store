import { Action, combineReducers } from 'redux';
import { config } from './config';
import { ConfigAction } from '../actions/configActions';
import { facets } from './facets';
import { parameters } from './parameters';
import { results } from './results';
import { Store } from '../store';
import { suggestions } from './suggestions';

export const reducers = combineReducers<Store.SearchState>({
  config,
  results,
  parameters,
  facets,
  suggestions,
});
