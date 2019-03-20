import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestTimeEntries, deleteTimeEntry } from '../../ducks/time-entries';

import TimeEntries from './TimeEntries';

class TimeEntriesContainer extends React.Component {
  componentDidMount() {
    const { onRequestTimeEntries } = this.props;
    onRequestTimeEntries();
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
  deleteTimeEntry,
  onRequestTimeEntries: requestTimeEntries
}, dispatch);

TimeEntriesContainer.propTypes = TimeEntries.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntriesContainer);
