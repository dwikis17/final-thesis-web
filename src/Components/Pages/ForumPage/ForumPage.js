/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';

import { Table } from 'antd';
import { getToken } from '../../../Utils/CommonUtils/CommonUtils';
import { HTTP_STATUS_OK } from '../../../Constants/HttpStatusConstants';
import { VERIFY_TOKEN_API } from '../../../Constants/Apis';
import ForumTable from '../../ForumTable/ForumTable';
import ForumButtonSection from '../../ForumButtonSection/ForumButtonSection';

class ForumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }

  async componentDidMount() {
    const { authenticated } = this.state;
    const { history } = this.props;
    await this.authenticateToken(history);
  }

  authenticateToken = async (history) => {
    try {
      const token = getToken();

      if (!token) {
        return history.push('/login');
      }
      return this.setState({
        authenticated: true
      });
    } catch (e) {
      localStorage.clear();
      this.setState({
        authenticated: false
      });
      return history.push('/login');
    }
  };

  render() {
    const { authenticated } = this.state;
    const { history } = this.props;
    return authenticated && (
    <div className=" h-screen p-5 w-full m-auto">
      <main className=" h-full text-center  p-5">
        <h1 className="text-4xl text-white mb-5">TOPUPKUY FORUM</h1>
        <ForumTable history={history} />
      </main>
    </div>
    );
  }
}

export default ForumPage;
