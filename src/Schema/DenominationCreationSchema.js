import * as Yup from 'yup';

const DenominationCreationSChema = Yup.object({
  nominal: Yup.number().required('Nominal is Required'),
  price: Yup.number().required('Price is Required'),
});

export default DenominationCreationSChema;
