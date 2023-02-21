import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { setUserInfo } from '../../../app/app-reducer'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { schemaRegister } from '../helpers/register-validation'

export const useRegistration = () => {
  const dispatch = useAppDispatch()
  const isRegistered = useAppSelector(state => state.app.isRegistered)

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schemaRegister) })

  const onSubmit = handleSubmit(({ name, email }) => {
    dispatch(setUserInfo({ name, email }))
  })

  return { errors, onSubmit, register, isRegistered }
}
