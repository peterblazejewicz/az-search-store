import { Store } from '../store';
import { SuggestionsAction } from '../actions/suggestionsActions';
import { updateObject } from './reducerUtils';

export const initialState: Store.Suggestions = {
  isFetching: false,
  lastUpdated: 0,
  suggestions: [],
};

export function suggestions(
  state: Store.Suggestions = initialState,
  action: SuggestionsAction,
): Store.Suggestions {
  switch (action.type) {
    case 'INITIATE_SUGGEST':
      return updateObject(state, { isFetching: true });
    case 'SET_SUGGESTIONS_PROCESSOR':
      return updateObject(state, {
        suggestionsProcessor: action.suggestionsProcessor,
      });
    case 'CLEAR_SUGGESTIONS':
      return updateObject(state, { suggestions: [] });
    case 'RECEIVE_SUGGESTIONS':
      const suggestions = state.suggestionsProcessor
        ? state.suggestionsProcessor(action.suggestions)
        : action.suggestions;
      return updateObject(state, {
        isFetching: false,
        lastUpdated: action.receivedAt,
        suggestions,
      });
    default:
      return state;
  }
}
