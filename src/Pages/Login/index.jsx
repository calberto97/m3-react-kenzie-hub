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

const LoginPage = ({ setUser, notifyError, notifySuccess }) => {
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
      setLoading(true);
      const response = await api.post("/sessions", data);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      notifySuccess("Login efetuado com sucesso!");
      setTimeout(() => {
        navigate("/home");
      }, 2500);
    } catch (error) {
      setError("error", {
        message: console.log(error.response.data.message),
      });
      notifyError("Ops!  Algo deu errado");
    } finally {
      setTimeout(() => {
        reset();
        setLoading(false);
      }, 2700);
    }
  };

  return (
    <>
      <Header flex={false}/>
      <Form onSubmit={handleSubmit(onSubmit)} h1="Login">
        <Input
          label="Email"
          type="email"
          placeholder="Digite seu Email"
          register={register("email")}
          disabled={loading}
        />
        {errors.email?.message && (
          <span aria-errormessage="error">{errors.email.message}</span>
        )}
        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          register={register("password")}
          disabled={loading}
        />
        {errors.password?.message && (
          <span aria-errormessage="error">{errors.password.message}</span>
        )}
        <Button
          type="submit"
          pink={true}
          small={false}
          disabled={!isDirty | !isValid}
          innerText={loading ? "Entrando..." : "Entrar"}
        />
        <small>Ainda não possui uma conta?</small>
        <Link to="/register">
          <Button
            pink={false}
            small={false}
            innerText='Cadastrar'
          />
        </Link>
      </Form>
    </>
  );
};

export default LoginPage;
