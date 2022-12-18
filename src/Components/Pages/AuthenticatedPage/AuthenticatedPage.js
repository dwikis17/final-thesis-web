import React from 'react';

class AuthenticatedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  async componentDidMount() {
    const { authenticated } = this.state;
    const { history } = this.props;
    if (!authenticated) {
      console.log('asdf');
      history.push('/');
    }
  }

  render() {
    console.log('msk authenticated page');

    return (
      <h1>thisis authenticated</h1>
    );
  }
}

export default AuthenticatedPage;
