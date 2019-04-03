import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  retrieveTeamMembersRequest, sortTeamMembers, teamMembersSelector
} from '../../ducks/team-members';
import { clientNameIdSelector, retrieveClientsRequest } from '../../ducks/clients';
import TeamMembers from './TeamMembers';

class TeamMembersContainer extends React.Component {
  componentDidMount() {
    const { onRetrieve, onRetrieveClients } = this.props;
    onRetrieve();
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
  onRetrieve: retrieveTeamMembersRequest,
  onRetrieveClients: retrieveClientsRequest,
  sortTeamMembers
}, dispatch);

TeamMembersContainer.propTypes = TeamMembers.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembersContainer);
