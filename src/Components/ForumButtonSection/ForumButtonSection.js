import Modal from 'antd/es/modal/Modal';
import React from 'react';
import { Input, Button, message } from 'antd';
import { isEmpty } from 'lodash';
import axios from 'axios';
import { getToken } from '../../Utils/CommonUtils/CommonUtils';

const { TextArea } = Input;
function ForumButtonSection({ callReFetch, history }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  console.log(isModalOpen);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCreatePost = async () => {
    const finalPayload = {
      title,
      description,
      token: getToken()
    };

    await axios.post('http://localhost:80/api/post/', finalPayload);

    setIsModalOpen(false);
    setTitle('');
    setDescription('');
    message.success('thread created successfuly');
    callReFetch();
  };

  const handleLogOut = () => {
    localStorage.clear();
    return history.push('/');
  };
  return (
    <div className="flex flex-row">
      <div className=" flex w-1/2 flex-row h-[100px]  items-center  justify-start">
        <button type="submit" className="border justify-center flex flex-col bg-white rounded-md h-[50px] p-3" onClick={() => { setIsModalOpen(true); }}>Create New Thread</button>
        <Modal
          title="Create New Discussion"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCreatePost} className="text-black" disabled={isEmpty(title) || isEmpty(description)}>
              Create
            </Button>,
          ]}
        >
          <h1>Title</h1>
          <Input value={title} onChange={(event) => setTitle(event.target.value)} />
          <h1>Description</h1>
          <TextArea value={description} onChange={(event) => setDescription(event.target.value)} />
        </Modal>
      </div>
      <div className=" w-1/2 items-center justify-end h-[100px] flex flex-row">
        <button type="submit" className="justify-center flex flex-col bg-orange-500 rounded-md h-[25px] p-2" onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
}

ForumButtonSection.propTypes = {

};

export default ForumButtonSection;
