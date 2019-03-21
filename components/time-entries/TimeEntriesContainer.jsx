import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { retrieveTimeEntriesRequest, deleteTimeEntryRequest } from '../../ducks/time-entries';
import TimeEntries from './TimeEntries';

class TimeEntriesContainer extends React.Component {
  componentDidMount() {
    const { onRetrieve } = this.props;
    onRetrieve();
  }

  render() {
    return (
      <TimeEntries {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  timeEntries: state.timeEntries.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onDelete: deleteTimeEntryRequest,
  onRetrieve: retrieveTimeEntriesRequest
}, dispatch);

TimeEntriesContainer.propTypes = TimeEntries.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntriesContainer);
