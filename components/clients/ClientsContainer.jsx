import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  retrieveClientsRequest, sortClients, sortDirectionClients,
  clientsSortBySelector, clientsSortDirectionSelector, clientsSelector
} from '../../ducks/clients';
import Clients from './Clients';

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
  clients: clientsSelector(state),
  sortBy: clientsSortBySelector(state),
  sortDirection: clientsSortDirectionSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  clientsSelector,
  onRetrieve: retrieveClientsRequest,
  sortClients,
  sortDirectionClients
}, dispatch);

ClientsContainer.propTypes = Clients.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);
