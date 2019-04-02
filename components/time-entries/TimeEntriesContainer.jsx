import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  deleteTimeEntryRequest, filterTimeEntries, retrieveTimeEntriesRequest, timeEntriesSelector
} from '../../ducks/time-entries';
import { clientNameIdSelector } from '../../ducks/clients';
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
  timeEntries: timeEntriesSelector(state),
  clients: clientNameIdSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onDelete: deleteTimeEntryRequest,
  filterTimeEntries,
  onRetrieve: retrieveTimeEntriesRequest
}, dispatch);

TimeEntriesContainer.propTypes = TimeEntries.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntriesContainer);
