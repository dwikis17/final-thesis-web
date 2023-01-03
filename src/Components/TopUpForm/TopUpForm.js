import { Input } from 'antd';
import React from 'react';
import { handleNumberCurrency } from '../../Utils/CommonUtils/CommonUtils';
import DenominationSection from '../DenominationSection/DenominationSection';
import EmailSection from '../EmailSection/EmailSection';
import IdTaglineSection from '../IdTaglineSection/IdTaglineSection';

function TopUpForm({ data, handleSubmit, formik }) {
  return (
    <div className=" w-full grid gap-5 grid-cols-1  content-start text-white  ">
      <div className="w-full grid text-4xl h-24">
        <h1>{data?.name.toUpperCase()}</h1>
      </div>
      <IdTaglineSection formik={formik} game={data?.name} />
      <DenominationSection data={data} formik={formik} />
      <EmailSection formik={formik} />
      <h1>
        Price :
        {' '}
        {handleNumberCurrency(formik?.values?.price)}
      </h1>
      <button type="submit" className="border border-black rounded-sm w-full bg-red-700" onClick={() => handleSubmit()}>Check Out</button>
    </div>
  );
}

TopUpForm.propTypes = {

};

export default TopUpForm;
