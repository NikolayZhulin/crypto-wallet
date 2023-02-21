import styled from 'styled-components'

import { FlexBlock } from '../../../ui/components/FlexBlock'

export const RegistrationBlockWrapper = styled.div`
  width: 430px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
`

export const FormFieldContainer = styled(FlexBlock)`
  margin-bottom: 35px;

  position: relative;
`
