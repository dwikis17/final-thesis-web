import Filter3TwoTone from '@mui/icons-material/Filter3TwoTone';
import { Input } from 'antd';
import React from 'react';

function EmailSection({ formik }) {
  const { setFieldValue } = formik;
  return (
    <>
      <h1>Input your email</h1>
      <div className="w-full grid grid-cols-3 bg-white items-center rounded-xl sm:gap-10 h-24 p-2 justify-items-start gap-0 ">
        <div className="col-span-2 w-full   ">
          <div className=" w-full px-2 grid h-9 ">
            <Input placeholder="Email" onChange={(event) => { setFieldValue('email', event.target.value); }} />
          </div>
        </div>
        <div className=" w-full">
          <div className="text-black grid justify-items-end mr-5">
            <Filter3TwoTone />
          </div>
        </div>
      </div>
    </>
  );
}

EmailSection.propTypes = {

};

export default EmailSection;
