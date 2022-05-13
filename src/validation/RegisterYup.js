import * as Yup from 'yup';

let validation = Yup.object({
    name:Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required().min(6),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password does not match')
})  

export default validation;