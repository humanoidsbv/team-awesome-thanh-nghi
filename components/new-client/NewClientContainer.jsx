import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addClientRequest, clientsSelector, retrieveClientsRequest } from '../../ducks/clients';
import NewClient from './NewClient';

class NewClientContainer extends React.Component {
  componentDidMount() {
    const { onRetrieveClients } = this.props;
    onRetrieveClients();
  }

  render() {
    return (
      <NewClient {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  clients: clientsSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: addClientRequest,
  onRetrieveClients: retrieveClientsRequest
}, dispatch);

NewClientContainer.propTypes = NewClient.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NewClientContainer);
