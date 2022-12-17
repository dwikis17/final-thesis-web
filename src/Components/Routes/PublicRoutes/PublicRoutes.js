import React, { Component } from 'react';
import axios from 'axios';
import { VERIFY_TOKEN_API } from '../../../Constants/Apis';
import { getToken } from '../../../Utils/CommonUtils/CommonUtils';
import { HTTP_STATUS_OK } from '../../../Constants/HttpStatusConstants';
import Header from '../../Header/Header';

class PublicRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,

      searchKeyword: ''
    };
  }

  async componentDidMount() {
    const { history } = this.props;
    await this.authenticateUser(history);
  }

  authenticateUser = async (history) => {
    try {
      const token = getToken();
      const data = await axios.get(`${VERIFY_TOKEN_API}/${token}`);
      const dateIsExpired = Date.now() >= data.data.decodedToken.exp * 1000;
      const verifyFail = data.status !== HTTP_STATUS_OK;

      if (verifyFail || dateIsExpired) {
        localStorage.clear();
        return this.setState({
          authenticated: false
        });
      }

      return this.setState({
        authenticated: true
      });
    } catch (error) {
      localStorage.clear();
      return this.setState({
        authenticated: false
      });
    }
  };

  render() {
    const { authenticated, searchKeyword } = this.state;
    const { history } = this.props;

    return (
      <div className="container">
        <Header authenticated={authenticated} handleSearchGames={this.handleSearchGames} />
        <div className="content" />
      </div>
    );
  }
}

export default PublicRoutes;
