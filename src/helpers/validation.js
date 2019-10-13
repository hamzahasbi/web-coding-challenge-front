import * as yup from "yup"

const validationLogin = yup.object().shape({
    email: yup
        .string()
        .email('Invalid Email')
        .required('Email is Required.'),
    password: yup
        .string()
        .required('Password is Required.'),
});
const validationAccount = yup.object().shape({
    email: yup
        .string()
        .email('Invalid Email')
        .required('Email is Required.'),
    password: yup
        .string()
        .required('Password is Required.'),
    confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});
const validation = {
    'validationLogin' : validationLogin,
    'validationAccount' : validationAccount
}

export default validation;