import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Form from "../../Components/Form";
import Input from "../../Components/Input";
import Header from "../../Components/Header";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { registerSchema } from "./registerSchema";

const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userID = localStorage.getItem("@USERID");
    if (token || userID) {
      navigate("/home");
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const { loading, onSubmitRegister } = useContext(UserContext);

  return (
    <>
      <Header flex={true} width="370px">
        <Link to="/login">
          <Button pink={false} small={true} innerText="Voltar" />
        </Link>
      </Header>
      <Form
        onSubmit={handleSubmit(onSubmitRegister)}
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
            <option value="Primeiro módulo (Introdução ao HTML, JS e CSS)">
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
