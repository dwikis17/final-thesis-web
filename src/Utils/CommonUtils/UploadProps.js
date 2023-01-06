import { message } from 'antd';
import { UPLOAD_GAME_IMAGE_API } from '../../Constants/Apis';
import { getToken } from './CommonUtils';

const token = getToken();
export const UploadProps = {
  name: 'file',
  action: UPLOAD_GAME_IMAGE_API,
  method: 'put',
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
