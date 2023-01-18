import React from 'react';
import {
  Button,
  Col, Form, Input, Row, Upload, message, Select, InputNumber
} from 'antd';
import { isEmpty } from 'lodash';
import { useFormik } from 'formik';
import DenominationCreationSChema from '../../../Schema/DenominationCreationSchema';
import { createNewDenomination } from '../../../Service/DenominationService';

function DenominationCreationPage({ history }) {
  const formik = useFormik({
    initialValues: {
      nominal: '',
      price: '',
    },
    validationSchema: DenominationCreationSChema
  });

  const { values, handleChange, setFieldValue } = formik;
  const handleSubmit = async () => {
    const { validateForm } = formik;
    const error = await validateForm(values);

    if (!isEmpty(error)) {
      return message.error('Silahkan isi semua data !');
    }
    try {
      await createNewDenomination(values);
      history.push('/admin/denomination');
      return message.success('denomination created succesfuly');
    } catch (errors) {
      return message.error('something went wrong, cannot add denomination');
    }
  };

  const onChangeNominal = (value) => {
    setFieldValue('nominal', value);
  };

  const onChangePrice = (value) => {
    setFieldValue('price', value);
  };
  return (
    <div>
      <h1 className="text text-white text-4xl mb-5">Denomination Creation</h1>
      <div className="w-full border bg-white rounded-md p-12">

        <Form layout="vertical">
          <Row>
            <Col span={24}>
              <Form.Item
                label="Nominal"
                name="nominal"
                rules={[{ required: true, message: 'Please input nominal!' }]}
              >
                <InputNumber onChange={onChangeNominal} value={values?.nominal} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: 'Please input price' }]}
              >
                <InputNumber value={values?.price} onChange={onChangePrice} />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" className="bg-black" onClick={handleSubmit}>
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
}

DenominationCreationPage.propTypes = {

};

export default DenominationCreationPage;
