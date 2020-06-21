import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  old_password: Yup.string(),
  password: Yup.string().when('old_password', {
    is: (val) => !!val.length,
    then: Yup.string().required('Campo obrigatório'),
    otherwise: Yup.string(),
  }),
  password_confirmation: Yup.string()
    .when('old_password', {
      is: (val) => !!val.length,
      then: Yup.string().required('Campo obrigatório'),
      otherwise: Yup.string(),
    })
    .oneOf([Yup.ref('password'), null], 'Confirmação de senha incorreta'),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().min(6, 'Mínimo 6 dígitos'),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória'),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().required('Senha obrigatória'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Confirmação incorreta',
  ),
});
