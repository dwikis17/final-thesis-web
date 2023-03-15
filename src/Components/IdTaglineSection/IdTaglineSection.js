import { Input } from 'antd';
import React from 'react';
import Filter1TwoToneIcon from '@mui/icons-material/Filter1TwoTone';

function IdTaglineSection({ formik, game }) {
  const { setFieldValue } = formik;
  console.log(game, 'games');
  return (
    <>
      <h1>
        Input your
        {' '}
        {game}
        {' '}
        ID

      </h1>
      <div className="w-full grid grid-cols-3 bg-white items-center rounded-xl sm:gap-10 h-24 p-2 justify-items-start gap-0 ">
        <div className=" col-span-2 w-full grid grid-cols-2  ">
          <div className=" w-full px-2 grid h-9 ">
            <Input placeholder="In Game Name" onChange={(event) => { setFieldValue('inGameName', event.target.value); }} />
          </div>
          <div className=" w-full px-2 grid h-9 ">
            <Input placeholder="Tagline" onChange={(event) => { setFieldValue('tagLine', event.target.value); }} />
          </div>
        </div>
        <div className=" w-full">
          <div className="text-black grid justify-items-end mr-5">
            <Filter1TwoToneIcon />
          </div>
        </div>
      </div>
    </>
  );
}

IdTaglineSection.propTypes = {

};

export default IdTaglineSection;
