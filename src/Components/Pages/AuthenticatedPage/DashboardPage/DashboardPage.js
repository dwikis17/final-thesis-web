import { Button } from 'antd';
import React from 'react';

function DashboardPage({ user, history }) {
  const handleLogOut = () => {
    localStorage.clear();
    return history.push('/login');
  };
  return (
    <div>
      <h1 className="text-4xl text-white mb-5">
        {' '}
        Welcome back,
        {' '}
        {user?.name}
      </h1>
      <Button type="primary" danger onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
}

DashboardPage.propTypes = {

};

export default DashboardPage;
