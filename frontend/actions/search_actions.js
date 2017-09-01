import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveSearchResults = results => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results,
  };
};

export const sendSearch = query => dispatch => {
  return SearchApiUtil.sendSearch(query).then(
    results => dispatch(receiveSearchResults(results))
  );
};
