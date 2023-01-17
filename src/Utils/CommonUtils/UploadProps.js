import { message } from 'antd';
import { UPLOAD_GAME_IMAGE_API } from '../../Constants/Apis';
import { getToken } from './CommonUtils';

const token = getToken();

function beforeUploadValidate(file) {
  const isPNG = file.type === 'image/png';
  if (!isPNG) {
    message.error('You can only upload PNG file!');
  }
  return isPNG;
}

export const UploadProps = {
  name: 'file',
  action: UPLOAD_GAME_IMAGE_API,
  method: 'put',
  accept: '.png',
  beforeUpload: beforeUploadValidate,
  headers: {
    authorization: `Bearer ${token}`,
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export const UploadPropsImageLogo = (id, type, setCurrentImage) => {
  return {
    name: 'file',
    action: `${UPLOAD_GAME_IMAGE_API}/${id}/${type}`,
    method: 'put',
    accept: '.png',
    showUploadList: false,
    beforeUpload: beforeUploadValidate,
    headers: {
      authorization: `Bearer ${token}`,
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        setCurrentImage(info.file.name);
        message.success(`${info.file.name} file uploaded successfully`);
      } if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
};
