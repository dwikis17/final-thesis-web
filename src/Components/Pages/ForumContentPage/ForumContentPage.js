import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Input, Button } from 'antd';
import { isEmpty } from 'lodash';
import axios from 'axios';
import { LeftOutlined } from '@ant-design/icons';
import { FETCH_ALL_POST_API } from '../../../Constants/Apis';
import { getToken } from '../../../Utils/CommonUtils/CommonUtils';
import { useAxios } from '../../../Utils/CommonUtils/useAxios';

const { TextArea } = Input;
function ForumContentPage({ history }) {
  const { id } = useParams();
  const { fetchedData: { data } } = useAxios(`${FETCH_ALL_POST_API}/${id}`);
  const { fetchedData: { data: commentData }, callReFetch } = useAxios(`http://localhost:80/api/comment/${id}`);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const token = getToken();
    if (!token) {
      history.push('/');
    }
  }, []);

  const renderComments = () => {
    return commentData?.map((item) => {
      return (
        <div className="border p-4 mb-4 flex flex-col rounded-md bg-orange-400 w-2/3">
          <b>{item.author}</b>
          <p>{item?.comment}</p>
        </div>
      );
    });
  };

  const addNewComments = async () => {
    const payload = {
      comment, token: getToken(), postId: id
    };

    await axios.post('http://localhost:80/api/comment', payload);

    callReFetch();

    setComment('');
  };

  return data && (
  <div className=" h-screen p-5 w-full m-auto">
    <main className=" h-full text-center  p-5 ">
      <h1 className="text-4xl text-white mb-5">TOPUPKUY FORUM</h1>
      <div className=" w-full text-left p-12">
        <div className=" w-full flex flex-row items-center mb-5">
          <LeftOutlined className="text-3xl text-white " onClick={() => history.push('/forum')} />
          <h1 className="mb-2 ml-3 text-white text-4xl ">{data[0]?.title}</h1>
        </div>

        <p className="  bg-white rounded-xl p-6 mb-12">{data[0]?.description}</p>
        <div className="">
          {commentData && renderComments()}
        </div>
        <div className=" w-2/3 flex flex-col">
          <TextArea rows={2} onChange={(event) => setComment(event.target.value)} value={comment} placeholder="input comments here...." />
          <div className="flex justify-end mt-3">
            <Button type="link" className="text-black bg-white" disabled={isEmpty(comment)} onClick={addNewComments}>Add Comments</Button>
          </div>
        </div>
      </div>
    </main>
  </div>
  );
}

ForumContentPage.propTypes = {

};

export default ForumContentPage;
