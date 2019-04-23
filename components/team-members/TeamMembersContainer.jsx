import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  retrieveTeamMembersRequest, sortTeamMembers, teamMembersSelector
} from '../../ducks/team-members.ts';
import { clientNameIdSelector, retrieveClientsRequest } from '../../ducks/clients.ts';
import TeamMembers from './TeamMembers';

class TeamMembersContainer extends React.Component {
  componentDidMount() {
    const { onRetrieveTeamMembers, onRetrieveClients } = this.props;
    onRetrieveTeamMembers();
    onRetrieveClients();
  }

  render() {
    return (
      <TeamMembers {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  teamMembers: teamMembersSelector(state),
  clients: clientNameIdSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onRetrieveTeamMembers: retrieveTeamMembersRequest,
  onRetrieveClients: retrieveClientsRequest,
  sortTeamMembers
}, dispatch);

TeamMembersContainer.propTypes = TeamMembers.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembersContainer);
