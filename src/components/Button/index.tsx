import React, { ButtonHTMLAttributes } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <>
        <AiOutlineReload className="fa-spin" /> Carregando...
      </>
    ) : (
      children
    )}
  </Container>
);

export default Button;
