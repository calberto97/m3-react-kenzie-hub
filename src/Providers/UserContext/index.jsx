import { createContext, useState } from "react";
import api from "../../Services/API";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [user, setUser] = useState();
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);
  const navigate = useNavigate();
  const { setError, reset } = useForm();

  const onSubmitLogin = async (data) => {
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

  const onSubmitRegister = async (data) => {
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
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
        notifySuccess,
        notifyError,
        navigate,
        onSubmitLogin,
        onSubmitRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
