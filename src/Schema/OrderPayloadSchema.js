import * as Yup from 'yup';

const OrderPayloadSchema = Yup.object({
  inGameName: Yup.string().required('In Game Name is Required'),
  tagLine: Yup.string().required('Tagline is Required'),
  price: Yup.number().required('Please select nominal'),
  game: Yup.string.required,
  nominal: Yup.number().required('Please select nominal'),
  email: Yup.string().email('Invalid Email').required('Email is required')
});

export default OrderPayloadSchema;
