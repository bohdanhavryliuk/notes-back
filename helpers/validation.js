import * as yup from "yup";

const validationsSchema = yup.object({
    content: yup.string().required().min(1),
    category: yup.string().required().min(1)
});

export default validationsSchema;