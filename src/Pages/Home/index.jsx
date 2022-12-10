import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import StyledHomepage from "./style";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import TechList from "../../Components/TechList";

const HomePage = () => {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext)

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
            <TechList/>
          </StyledHomepage>
        </>
      )}
    </>
  );
};

export default HomePage;
