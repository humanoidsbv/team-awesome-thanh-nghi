import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTeamMemberRequest, retrieveTeamMembersRequest, teamMembersSelector } from '../../ducks/team-members';
import { clientNameIdSelector, retrieveClientsRequest } from '../../ducks/clients';
import NewTeamMember from './NewTeamMember';

class NewTeamMemberContainer extends React.Component {
  componentDidMount() {
    const { onRetrieveClients, onRetrieveTeamMembers } = this.props;
    onRetrieveClients();
    onRetrieveTeamMembers();
  }

  render() {
    return (
      <NewTeamMember {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  clients: clientNameIdSelector(state),
  teamMembers: teamMembersSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: addTeamMemberRequest,
  onRetrieveClients: retrieveClientsRequest,
  onRetrieveTeamMembers: retrieveTeamMembersRequest
}, dispatch);

NewTeamMemberContainer.propTypes = NewTeamMember.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NewTeamMemberContainer);
