import 'fetch';
import React from 'react';

import RepositoryList from './repository-list';

class OpenSauce extends React.Component {
  render() {
    return (
      <div>
        <h2>Repositories for { this.props.name }</h2>
        <RepositoryList user={this.props.name} />
      </div>
    )
  }
}

React.render(<OpenSauce name="jackfranklin" />, document.getElementById('app'));
