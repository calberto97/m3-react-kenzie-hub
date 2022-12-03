import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import api from "../../Services/API";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Form from "../../Components/Form";
import Input from "../../Components/Input";
import Header from "../../Components/Header";

const RegisterPage = ({ notifySuccess, notifyError }) => {
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("@TOKEN");
      const userID = localStorage.getItem("@USERID");
      if (token || userID) {
        navigate("/home");
      }
    }, [navigate]);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "Nome deve ter mais de 3 caracteres")
      .max(80, "Nome não pode ter mais de 80 caracteres"),
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
    passwordOK: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup
      .string()
      .required("Obrigatório ter uma bio")
      .min(20, "Escreva mais um pouco!")
      .max(140, "Também não precisa de tanto..."),
    contact: yup
      .string()
      .required("Telefone obrigatório")
      .matches(
        /^(\d{2,3}|\(\d{2,3}\))[ ]?\d{3,4}[-]?\d{3,4}$/,
        "Telefone inválido"
      ),
    course_module: yup.string().required("Escolha um dos módulos"),
  });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/users", data);
      notifySuccess("Cadastro efetuado com sucesso!");
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (error) {
      setError("error", {
        message: console.log(error.response.data),
      });
      notifyError("Ops!  Algo deu errado");
    } finally {
      setTimeout(() => {
        reset();
      }, 2700);
    }
  };

  return (
    <>
      <Header flex={true} width="370px">
        <Link to="/login">
          <Button pink={false} small={true} innerText="Voltar" />
        </Link>
      </Header>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        h1="Crie sua conta"
        small="Rápido e grátis, vamos nessa"
      >
        <Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          register={register("name")}
          disabled={loading}
        />
        {errors.name?.message && (
          <span aria-errormessage="error">{errors.name.message}</span>
        )}

        <Input
          label="Email"
          type="email"
          placeholder="Digite seu Email"
          register={register("email")}
          disabled={loading}
        />
        {errors.email?.message && (
          <span aria-errormessage="error">
            {errors.email.message}
          </span>
        )}
        <Input
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          register={register("password")}
          disabled={loading}
        />
        {errors.password?.message && (
          <span aria-errormessage="error">
            {errors.password.message}
          </span>
        )}
        <Input
          label="Confirmar Senha"
          type="password"
          placeholder="Digite novamente sua senha"
          register={register("passwordOK")}
          disabled={loading}
        />
        {errors.passwordOK?.message && (
          <span aria-errormessage="error">
            {errors.passwordOK.message}
          </span>
        )}

        <Input
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          register={register("bio")}
          disabled={loading}
        />
        {errors.bio?.message && (
          <span aria-errormessage="error">{errors.bio.message}</span>
        )}

        <Input
          label="Contato"
          type="number"
          placeholder="Opção de contato"
          register={register("contact")}
          disabled={loading}
        />
        {errors.contact?.message && (
          <span aria-errormessage="error">
            {errors.contact.message}
          </span>
        )}
        <Input label="Selecionar Módulo">
          <select id="" {...register("course_module")}>
            <option value="">Selecione seu módulo</option>
            <option value="Primeiro módulo(Introdução ao HTML, JS e CSS)">
              Módulo 1
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Módulo 2
            </option>
            <option value="Terceiro módulo (Introdução ao React)">
              Módulo 3
            </option>
            <option value="Quarto módulo (Introdução ao Backend)">
              Módulo 4
            </option>
            <option value="Quinto módulo (Backend Intermediário)">
              Módulo 5
            </option>
            <option value="Sexto Módulo (Introdução ao mercado de trabalho)">
              Módulo 6
            </option>
          </select>
        </Input>
        {errors.course_module?.message && (
          <span aria-errormessage="error">
            {errors.course_module.message}
          </span>
        )}

        <Button
          type="submit"
          pink={true}
          small={false}
          disabled={!isDirty | !isValid}
          innerText={loading ? "Cadastrando..." : "Cadastrar"}
        />
      </Form>
    </>
  );
};

export default RegisterPage;
