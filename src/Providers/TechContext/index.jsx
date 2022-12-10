import { createContext } from "react";
import api from "../../Services/API";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState();

  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    return openModal ? setOpenModal(false) : setOpenModal(true);
  };

  const [openEditModal, setOpenEditModal] = useState(false);
  const [tech, setTech] = useState();
  const handleEditModal = (title, status, id) => {
    setTech({ title, status, id });

    setTimeout(() => {
      return openEditModal
        ? setOpenEditModal(false)
        : setOpenEditModal(true);
    }, 100);
  };

  const { setUser } = useContext(UserContext);
  const onSubmitTech = async (data) => {
    const token = localStorage.getItem("@TOKEN");
    setLoading(true);

    toast.promise(
      api
        .post("/users/techs/", data, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then(() => {
          try {
            api
              .get("/profile", {
                headers: { authorization: `Bearer ${token}` },
              })
              .then((response) => setUser(response.data));
          } catch (error) {
            console.error(error);
            window.localStorage.clear();
          }
        })
        .finally(
          setTimeout(() => {
            setLoading(false);
            // reset();
            handleModal();
          }, 1000)
        ),
      {
        pending: "Cadastrando...",
        success: "Tecnologia cadastrada com sucesso!",
        error: "Oops! Algo deu errado",
      }
    );
  };

  const deleteTech = (id) => {
    const token = localStorage.getItem("@TOKEN");
    toast.promise(
      api
        .delete(`users/techs/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then(() => {
          try {
            api
              .get("/profile", {
                headers: { authorization: `Bearer ${token}` },
              })
              .then((response) => {
                setUser(response.data);
                if (openEditModal) {
                  setTimeout(() => {
                    setOpenEditModal(false);
                  }, 200);
                }
              });
          } catch (error) {
            console.error(error);
            window.localStorage.clear();
          }
        }),
      {
        pending: "Deletando...",
        success: "Tecnologia deletada com sucesso!",
        error: "Oops! Algo deu errado",
      }
    );
  };

  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmitUpdateTech = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.authorization = `Bearer ${token} `;
    if (status) {
      setStatus({ status: status });
      setLoading(true);
      toast.promise(
        api
          .put(`/users/techs/${tech.id}`, { status: status })
          .then(() => {
            try {
              api
                .get("/profile", {
                  headers: { authorization: `Bearer ${token}` },
                })
                .then((response) => setUser(response.data));
            } catch (error) {
              console.error(error);
              window.localStorage.clear();
            }
          })
          .finally(
            setTimeout(() => {
              setLoading(false);
              setOpenEditModal(!openEditModal);
            }, 1000)
          ),
        {
          pending: "Atualizando...",
          success: "Tecnologia atualizada com sucesso!",
          error: "Oops! Algo deu errado",
        }
      );
    }
  };
  //

  return (
    <TechContext.Provider
      value={{
        openModal,
        handleModal,
        onSubmitTech,
        deleteTech,
        handleEditModal,
        openEditModal,
        tech,
        status,
        setStatus,
        handleChange,
        handleSubmitUpdateTech,
        loading,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
