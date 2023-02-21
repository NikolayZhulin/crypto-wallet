import * as yup from 'yup'

const emailRules = yup.string().email().required()
const nameRules = yup.string().min(3).max(32).required()

export const schemaRegister = yup.object().shape({
  email: emailRules,
  name: nameRules,
})
