import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addClientRequest } from '../../ducks/clients';
import NewClient from './NewClient';

const NewClientContainer = props => (
  <NewClient {...props} />
);

const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: addClientRequest
}, dispatch);

NewClientContainer.propTypes = NewClient.propTypes;

export default connect(null, mapDispatchToProps)(NewClientContainer);
