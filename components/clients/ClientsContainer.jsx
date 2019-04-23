import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  clientsSelector, retrieveClientsRequest, sortClients
} from '../../ducks/clients.ts';
import Clients from './Clients.tsx';

class ClientsContainer extends React.Component {
  componentDidMount() {
    const { onRetrieve } = this.props;
    onRetrieve();
  }

  render() {
    return (
      <Clients {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  clients: clientsSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onRetrieve: retrieveClientsRequest,
  sortClients
}, dispatch);

ClientsContainer.propTypes = Clients.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);
