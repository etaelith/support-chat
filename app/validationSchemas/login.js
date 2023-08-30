import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email("escribi un email valido").required(),
  password: yup.string().min(8, "Too short!").max(14, "Too long!").required("Password is required"),
});
