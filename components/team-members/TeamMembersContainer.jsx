import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  teamMembersItemsSelector, retrieveTeamMembersRequest
} from '../../ducks/team-members';
import TeamMembers from './TeamMembers';

class TeamMembersContainer extends React.Component {
  componentDidMount() {
    const { onRetrieve } = this.props;
    onRetrieve();
  }

  render() {
    return (
      <TeamMembers {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  teamMembers: teamMembersItemsSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onRetrieve: retrieveTeamMembersRequest
}, dispatch);

TeamMembersContainer.propTypes = TeamMembers.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembersContainer);
