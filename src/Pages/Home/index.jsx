import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import StyledHomepage from "./style";
import api from "../../Services/API";

const HomePage = ({ setUser, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userID = localStorage.getItem("@USERID");
    if (token === null || userID === null) {
      navigate("/login");
    } else {
      async function getUser() {
        try {
          const response = await api.get(`/users/${userID}`)
          setUser(response.data)
        } catch (error) {
          console.log(error)
        }
      }
      getUser()
    }
  }, [navigate]);

  const logOut = () => {
    setUser();
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {user && (
        <>
          <Header flex={true} width="800px">
            <Button
              pink={false}
              small={true}
              innerText="Sair"
              onClick={logOut}
            />
          </Header>
          <StyledHomepage width="800px">
            <section>
              <small>
                <h1>Olá, {user.name}</h1>
                <p>{user.course_module}</p>
              </small>
            </section>
            <div>
              <h1>Que pena! Estamos em desenvolvimento :(</h1>
              <p>
                Nossa aplicação está em desenvolvimento, em breve
                teremos novidades
              </p>
            </div>
          </StyledHomepage>
        </>
      )}
    </>
  );
};

export default HomePage;
