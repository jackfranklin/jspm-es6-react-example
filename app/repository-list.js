import React from 'react';
import {forUser} from './api';
import Repo from './repo';

export default class RepositoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }

  componentDidMount() {
    forUser(this.props.user).then((repos) => {
      this.setState({ repos });
    });
  }

  render() {
    var repos = this.state.repos.map((repo) => <li key={repo.id}><Repo raw={repo} /></li>);
    return <ul>{repos}</ul>;
  }
}
