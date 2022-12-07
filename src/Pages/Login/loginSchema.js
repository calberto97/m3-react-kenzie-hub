import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=^.{6,}$)/, "Senha deve ter no mínimo 6 dígitos")
    .matches(
      /(?=.*[a-z])/,
      "Senha deve conter ao menos um caractere minúsculo"
    )
    .matches(
      /(?=.*[A-Z])/,
      "Senha deve conter ao menos um caractere maiúsculo"
    )
    .matches(/(?=.*\d)/, "Senha deve conter ao menos um dígito")
    .matches(
      /(?=.*[!@#$%^&;*()_+}])/,
      "Senha deve conter ao menos um caractere especial"
    ),
});