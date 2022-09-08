import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email girin.")
    .required("Zorunlu alan."),
  password: yup
    .string()
    .min(5, "parolanız en az 5 karekter olmalı!")
    .required("Zorunlu alan."),
});

export default validations;
