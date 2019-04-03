import { createSelector } from 'reselect';

// ACTIONS
export const RETRIEVE_TEAM_MEMBERS_REQUEST = 'RETRIEVE_TEAM_MEMBERS_REQUEST';
export const RETRIEVE_TEAM_MEMBERS_SUCCESS = 'RETRIEVE_TEAM_MEMBERS_SUCCESS';

// ACTION CREATORS
export const retrieveTeamMembersRequest = () => ({
  type: RETRIEVE_TEAM_MEMBERS_REQUEST
});

export const retrieveTeamMembersSuccess = teamMembers => ({
  type: RETRIEVE_TEAM_MEMBERS_SUCCESS,
  payload: teamMembers
});

// INITIAL STATE

export const initialState = {
  items: [],
  isLoading: false,
  error: ''
};

// REDUCERS
export const teamMembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_TEAM_MEMBERS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case RETRIEVE_TEAM_MEMBERS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

// SELECTORS
export const teamMembersRootSelector = state => state.teamMembers;

export const teamMembersItemsSelector = createSelector(
  teamMembersRootSelector,
  teamMembers => teamMembers.items
);
