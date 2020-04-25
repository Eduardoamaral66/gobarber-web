import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid #232129;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      svg {
        color: #ff9000 !important;
      }
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #ff9000 !important;
      }
    `}

  svg {
    margin-right: 16px;
    color: #666360;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
`;
