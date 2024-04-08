import * as yup from "yup";

export const checkOutSchema = yup.object().shape({
  fullName: yup.string().max(15, "too long").required("Required"),
  streetName: yup.string().max(15, "too long").required("Required"),
  streetNumber: yup.number().max(999999, "too long").required("Required"),
  postalCode: yup.number().max(99999999, "invalid postal code").required("Required"),
  city: yup.string().max(15, "too long").required("Required"),
});
