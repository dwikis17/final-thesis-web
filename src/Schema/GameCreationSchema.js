import * as Yup from 'yup';

const GameCreationSchema = Yup.object({
  name: Yup.string().required('Name is Required'),
  description: Yup.string().required('Description is Required'),
  vouchers: Yup.array().required('vouchers is required'),
});

export default GameCreationSchema;
