import styled, { keyframes } from 'styled-components'

export const CircleAnimation = () => {
  return (
    <CircleBox>
      <CircleWrapperRight>
        <CircleWholeRight></CircleWholeRight>
      </CircleWrapperRight>
    </CircleBox>
  )
}

const CircleBox = styled.div`
  width: 550px;
  height: 550px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CircleWrapperRight = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;

  &:before {
    content: '';

    width: 6px;
    height: 6px;

    position: absolute;

    bottom: 29px;
    right: 256px;

    border-radius: 50%;
    background: var(--background);
  }
  &:after {
    content: '';

    width: 6px;
    height: 6px;

    position: absolute;

    top: 265px;
    right: 28px;

    border-radius: 50%;
    background: var(--background);
  }
`

const rightRotate = keyframes`
  0% {
    transform: rotate(-180deg);
  }
  50%,
  100% {
    transform: rotate(45deg);
  }
`

const CircleWholeRight = styled.div`
  width: 486px;
  height: 486px;
  border: 3px solid transparent;
  border-radius: 50%;
  transform: rotate(-180deg);
  border-top: 2px solid #e75626;
  border-right: 2px solid #e75626;
  animation: ${rightRotate} 5s forwards;
`
