import * as yup from "yup";

const bookingSchema = yup.object({
  pickupPlace: yup.string().required(),
  pickupTime: yup.date().required(),
  dropoffPlace: yup.string().required(),
  dropoffTime: yup.date().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  number: yup.string().required(),
});

export default bookingSchema;
