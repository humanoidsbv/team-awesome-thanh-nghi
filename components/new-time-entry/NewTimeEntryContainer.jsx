import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTimeEntryRequest } from '../../ducks/time-entries';
import { retrieveClientsRequest, clientNameIdSelector } from '../../ducks/clients';
import NewTimeEntry from './NewTimeEntry';

class NewTimeEntryContainer extends React.Component {
  componentDidMount() {
    const { onRetrieveClients } = this.props;
    onRetrieveClients();
  }

  render() {
    return (
      <NewTimeEntry {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  clients: clientNameIdSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: addTimeEntryRequest,
  onRetrieveClients: retrieveClientsRequest
}, dispatch);

NewTimeEntryContainer.propTypes = NewTimeEntry.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NewTimeEntryContainer);
