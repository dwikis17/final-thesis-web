import React from 'react';
import Filter2TwoToneIcon from '@mui/icons-material/Filter2TwoTone';
import { Input } from 'antd';
import './DenominationSection.css';

function DenominationSection({ data, formik }) {
  const { setFieldValue } = formik;

  const handleOnClick = (items) => {
    setFieldValue('price', items.price);
    setFieldValue('nominal', items.nominal);
  };
  const renderDenomination = () => {
    if (data) {
      const { vouchers } = data;
      return vouchers?.map((items) => {
        const selected = formik?.values?.nominal === items?.nominal ? 'selected' : 'not-selected';
        return (
          <div className={`border border-black rounded-xl w-full h-24  text-black ${selected}`}>
            <button type="submit" className={`w-full h-full rounded-xl ${selected}`} onClick={() => handleOnClick(items)}>
              {items?.nominal}
              {' '}
              Point
            </button>
          </div>

        );
      });
    }
    return null;
  };
  return (
    <>
      <h1>Pilih Nominal Voucher</h1>
      <div className="w-full grid grid-cols-3 bg-white  items-center rounded-xl sm:gap-10 h-full p-2 justify-items-start gap-0  border border-black">
        <div className="w-full col-span-2 grid grid-cols-2 pplace-content-around p-3 gap-4">
          {renderDenomination()}
        </div>

        <div className=" w-full">
          <div className="text-black grid justify-items-end mr-5 ">
            <Filter2TwoToneIcon />
          </div>
        </div>
      </div>
    </>
  );
}

DenominationSection.propTypes = {

};

export default DenominationSection;
