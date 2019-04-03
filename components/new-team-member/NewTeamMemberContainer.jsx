import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTeamMemberRequest } from '../../ducks/team-members';
import { retrieveClientsRequest, clientNameIdSelector } from '../../ducks/clients';
import NewTeamMember from './NewTeamMember';

class NewTeamMemberContainer extends React.Component {
  componentDidMount() {
    const { onRetrieveClients } = this.props;
    onRetrieveClients();
  }

  render() {
    return (
      <NewTeamMember {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  clients: clientNameIdSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: addTeamMemberRequest,
  onRetrieveClients: retrieveClientsRequest
}, dispatch);

NewTeamMemberContainer.propTypes = NewTeamMember.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NewTeamMemberContainer);
