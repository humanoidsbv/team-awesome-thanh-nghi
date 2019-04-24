import { createSelector } from 'reselect';
import { clientsSelector } from './clients';

// ACTIONS
export const RETRIEVE_TEAM_MEMBERS_REQUEST = 'RETRIEVE_TEAM_MEMBERS_REQUEST';
export const RETRIEVE_TEAM_MEMBERS_SUCCESS = 'RETRIEVE_TEAM_MEMBERS_SUCCESS';
export const ADD_TEAM_MEMBER_REQUEST = 'ADD_TEAM_MEMBER_REQUEST';
export const ADD_TEAM_MEMBER_SUCCESS = 'ADD_TEAM_MEMBER_SUCCESS';
export const SORT_TEAM_MEMBERS = 'SORT_TEAM_MEMBERS';

// TYPESCRIPT INTERFACES

export interface TeamMemberModel {
  address: string;
  city: string;
  clientName?: string;
  currentClient: string;
  description: string;
  emailAddress: string;
  firstName: string;
  id?: string;
  lastName: string;
  linkedIn: string;
  memberNumber: string;
  startDate?: string;
  zipcode: string;
}

export interface TeamMembersState {
  error: string;
  isLoading: boolean;
  items: TeamMemberModel[];
  sortBy: string;
}

// INITIAL STATE

export const initialState: TeamMembersState = {
  error: '',
  isLoading: false,
  items: [],
  sortBy: 'name-ascending'
};

// ACTION CREATORS
export const retrieveTeamMembersRequest = () => ({
  type: RETRIEVE_TEAM_MEMBERS_REQUEST
});

export const retrieveTeamMembersSuccess = (teamMembers: TeamMemberModel[]) => ({
  type: RETRIEVE_TEAM_MEMBERS_SUCCESS,
  payload: teamMembers
});

export const addTeamMemberRequest = (newTeamMember: TeamMemberModel) => ({
  type: ADD_TEAM_MEMBER_REQUEST,
  payload: newTeamMember
});

export const addTeamMemberSuccess = (newTeamMember: TeamMemberModel) => ({
  type: ADD_TEAM_MEMBER_SUCCESS,
  payload: newTeamMember
});

export const sortTeamMembers = (sortSelection: TeamMembersState["sortBy"]) => ({
  type: SORT_TEAM_MEMBERS,
  payload: sortSelection
});

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

    case ADD_TEAM_MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ADD_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [
          action.payload,
          ...state.items
        ]
      };

    case SORT_TEAM_MEMBERS:
      return {
        ...state,
        sortBy: action.payload
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

export const teamMembersClientIdSelector = createSelector(
  teamMembersItemsSelector,
  clientsSelector,
  (teamMembers, clients) => teamMembers.map((teamMember) => {
    const { name } = clients.find(client => teamMember.currentClient === client.id) || {name: 'Unknown'};
    return {
      ...teamMember,
      clientName: name
    };
  })
);

export const teamMembersSortBySelector = createSelector(
  teamMembersRootSelector,
  teamMembers => teamMembers.sortBy
);

export const teamMembersSelector = createSelector(
  teamMembersClientIdSelector,
  teamMembersSortBySelector,
  (items, sortBy) => (
    [...items].sort((a, b) => {
      const [property, order] = sortBy.split('-');
      if (a[property] === b[property]) {
        return 0;
      }
      if (order === 'ascending') {
        return (a[property] < b[property]) ? -1 : 1;
      }
      return (a[property] < b[property]) ? 1 : -1;
    })
  )
);
