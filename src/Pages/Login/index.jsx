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
import { loginSchema } from "./loginSchema";

const LoginPage = () => {
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
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const { onSubmitLogin, loading } = useContext(UserContext);

  return (
    <>
      <Header flex={false} />
      <Form onSubmit={handleSubmit(onSubmitLogin)} h1="Login">
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
          placeholder="Digite sua senha"
          register={register("password")}
          disabled={loading}
        />
        {errors.password?.message && (
          <span aria-errormessage="error">
            {errors.password.message}
          </span>
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
          <Button pink={false} small={false} innerText="Cadastrar" />
        </Link>
      </Form>
    </>
  );
};

export default LoginPage;
