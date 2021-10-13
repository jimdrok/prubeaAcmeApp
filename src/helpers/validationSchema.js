import * as yup from 'yup';



export const AuthSchema = yup.object().shape({
  password: yup.string().required('Este campo es requerido'),
  user: yup.string().required('Este campo es requerido'),
  
});

export const RegisterSchema = yup.object().shape({
  title: yup.string().required('Este campo es requerido'),
  url: yup.string().url('Debe ingresar una url valida (ejemplo "https://www.ejemplo.org/")')
  .required('Este campo es requerido'),
  
})