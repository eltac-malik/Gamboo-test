import {object,string} from 'yup';

let validation = object({
    username: string().required(),
    password: string().required()
})  

export default validation;