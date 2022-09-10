import *as yup from "yup";
const newProductSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string(),
    price: yup.string().required(),
})

export default newProductSchema;