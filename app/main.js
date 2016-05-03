import 'fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import RepositoryList from './repository-list';

var OpenSauce = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Repositories for { this.props.name }</h2>
        <RepositoryList user={this.props.name} />
      </div>
    )
  }
});

ReactDOM.render(<OpenSauce name="jackfranklin" />, document.getElementById('app'));
