import {
  Button,
  Col, Form, Input, Row, Upload, message, Select,
} from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { FETCH_ALL_GAMES_API, GET_DENOMINATION_LIST } from '../../Constants/Apis';
import GameCreationSchema from '../../Schema/GameCreationSchema';
import { createNewGame, handleNumberCurrency, updateGame } from '../../Utils/CommonUtils/CommonUtils';
import { UploadProps } from '../../Utils/CommonUtils/UploadProps';
import { useAxios } from '../../Utils/CommonUtils/useAxios';

const { Option } = Select;
function GameForm({
  disabled = false, history, gameData, setIsDisabled, isEditMode = false, callReFetch
}) {
  const formik = useFormik({
    initialValues: {
      name: gameData?.name || '',
      description: gameData?.description || '',
      vouchers: gameData?.vouchers || []
    },
    enableReinitialize: true,
    validationSchema: GameCreationSchema
  });

  const { handleChange, setFieldValue, values } = formik;

  const handleSubmit = async () => {
    const { validateForm } = formik;
    const error = await validateForm(values);
    if (!isEmpty(error) || isEmpty(values.vouchers)) {
      return message.error('Silahkan isi semua data !');
    }
    if (!isEditMode) {
      return createNewGame(formik?.values, history);
    }
    await updateGame(formik?.values, gameData?._id);
    return setIsDisabled(true);
  };

  const { fetchedData: { data: denominationList } } = useAxios(GET_DENOMINATION_LIST);

  const handleChangeSelect = (value) => {
    setFieldValue('vouchers', value);
  };

  const renderDenominationList = () => {
    return denominationList?.map((value) => {
      return (
        <Option value={value?._id} label={value?.nominal}>
          <div className="demo-option-label-item">
            <span role="img" aria-label="China">
              {value?.nominal}
              &nbsp;
            </span>
            {handleNumberCurrency(value?.price)}
          </div>
        </Option>
      );
    });
  };

  return (
    <div className="w-full border border-white bg-white rounded-md p-12">
      <Form layout="vertical">
        <Row>
          <Col span={24}>
            <Form.Item
              label="Game Name"
              name="name"
              initialValue={values.name}
              rules={[{ required: true, message: 'Please input game name!' }]}
            >
              <Input onChange={handleChange} disabled={disabled} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Description"
              name="description"
              initialValue={values.description}
              rules={[{ required: true, message: 'Please input game description!' }]}
            >
              <Input.TextArea disabled={disabled} value={formik?.values?.name} onChange={handleChange} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Vouchers"
          name="vouchers"
          initialValue={values.vouchers}
          rules={[{ required: true, message: 'Please input game denomination!' }]}
        >
          <Select
            mode="multiple"
            disabled={disabled}
            style={{ width: '100%' }}
            placeholder="select one or multiple denomination"
            initialValue={values.vouchers}
            onChange={handleChangeSelect}
            optionLabelProp="label"
          >
            {denominationList && renderDenominationList()}
          </Select>
        </Form.Item>

        <Form.Item>
          {!disabled && (
          <Button type="primary" htmlType="submit" className="bg-black" onClick={handleSubmit}>
            Submit
          </Button>
          )}
        </Form.Item>
      </Form>

    </div>
  );
}

GameForm.propTypes = {

};

export default GameForm;
