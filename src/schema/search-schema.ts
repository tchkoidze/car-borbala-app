import * as yup from "yup";

const searchSchema = yup.object({
  pickupLocation: yup.string().required("Location is required"),
  returnLocation: yup.string().required("Location is required"),
  pickupDate: yup.date().required("Date is required"),
  returnDate: yup.date().required("Date is required"),
});

export default searchSchema;
