import { Action, combineReducers } from 'redux';
import { input } from './input';
import { searchParameters } from './searchParameters';
import { Store } from '../store';
import { suggestionsParameters } from './suggestionsParameters';

export const parameters = combineReducers<Store.Parameters>({
  input,
  searchParameters,
  suggestionsParameters,
});
