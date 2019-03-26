import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { retrieveClientsRequest } from '../../ducks/clients';
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
  clients: state.clients.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onRetrieve: retrieveClientsRequest
}, dispatch);

ClientsContainer.propTypes = Clients.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);
