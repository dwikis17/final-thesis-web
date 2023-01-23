import {
  Button, Select, Upload, message
} from 'antd';
import { isEmpty } from 'lodash';
import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { FileJpgOutlined } from '@ant-design/icons';
import { BANNER_API, CHART_API, FETCH_ALL_TRANSACTION_API } from '../../../../Constants/Apis';
import { getToken, reducer } from '../../../../Utils/CommonUtils/CommonUtils';
import { useAxios } from '../../../../Utils/CommonUtils/useAxios';
import GameChart from '../../../Charts/GameChart';

const { Option } = Select;
function DashboardPage({ user, history }) {
  function beforeUploadValidate(file) {
    const isPNG = file.type === 'image/jpg';
    if (!isPNG) {
      message.error('You can only upload JPG file!');
    }
    return isPNG;
  }
  const initialState = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  };
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { fetchedData: { data }, callReFetch } = useAxios(`${CHART_API}`, state);

  const props = {
    onChange: (info) => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    name: 'image',
    accept: '.jpg',
    beforeUploadValidate,
    showUploadList: false
  };

  const handleUpload = (e, setImage, name) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', e.file);
    axios.post(`${BANNER_API}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${getToken()}`
      }
    })
      .then((res) => {
        message.success('Image uploaded successfully');

        setImage(res.data);
      })
      .catch((err) => {
        message.error('Error uploading image');
      });
  };

  return (
    <>
      <h1 className="text-4xl text-white mb-5">
        {' '}
        Welcome back,
        {' '}
        {user?.name}
      </h1>
      <div className=" grid grid-cols-2">
        { data && <GameChart data={data} state={state} dispatch={dispatch} callReFetch={callReFetch} />}
        <div className="grid grid-cols-1 ml-20">
          <h1 className="text-4xl text-white mb-5"> Upload Image Banner</h1>
          <Upload
            {...props}
            customRequest={(e) => handleUpload(e, setImage2, 'image1')}
          >
            <button type="submit" className="border p-2 round-md bg-white mt-2 ">Upload Image 1</button>
          </Upload>
          <Upload
            {...props}
            customRequest={(e) => handleUpload(e, setImage2, 'image2')}
          >
            <button type="submit" className="border p-2 round-md bg-white mt-2 ">Upload Image 2</button>
          </Upload>
          <Upload
            {...props}
            customRequest={(e) => handleUpload(e, setImage3, 'image3')}
          >
            <button type="submit" className="border p-2 round-md bg-white mt-2 ">Upload Image 3</button>
          </Upload>
        </div>
      </div>
    </>

  );
}

DashboardPage.propTypes = {

};

export default DashboardPage;
