import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewTimeEntryRequest } from '../../ducks/time-entries';

import NewTimeEntry from './NewTimeEntry';

const NewTimeEntryContainer = props => (
  <NewTimeEntry {...props} />
);

const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: addNewTimeEntryRequest
}, dispatch);

NewTimeEntryContainer.propTypes = NewTimeEntry.propTypes;

export default connect(null, mapDispatchToProps)(NewTimeEntryContainer);
