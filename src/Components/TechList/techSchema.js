import * as yup from "yup";

export const techSchema = yup.object().shape({
  title: yup
    .string()
    .required("Nome Obrigatório")
    .min(3, "Nome deve ter mais de 3 caracteres")
    .max(80, "Nome não pode ter mais de 80 caracteres"),
  status: yup.string().required("Escolha uma das opções"),
});
