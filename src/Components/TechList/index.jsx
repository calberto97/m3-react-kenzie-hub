import React, { useContext } from "react";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { UserContext } from "../../Providers/UserContext";
import StyledDiv from "./style";
import Modal from "../Modals";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TechContext } from "../../Providers/TechContext";
import { techSchema } from "./techSchema";

const TechList = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(techSchema),
    mode: "onChange",
  });

  const { user } = useContext(UserContext);
  const {
    openModal,
    handleModal,
    onSubmitTech,
    deleteTech,
    handleEditModal,
    openEditModal,
    tech,
    handleChange,
    handleSubmitUpdateTech,
    loading,
    status,
  } = useContext(TechContext);

  return (
    <>
      <StyledDiv>
        <span>
          <h2>Tecnologias</h2>
          <FaPlus onClick={handleModal} />
        </span>
        {user.techs.length ? (
          <ul>
            {user.techs.map((techs) => (
              <li key={techs.id}>
                <p>{techs.title}</p>
                <span>
                  <small>{techs.status}</small>
                  <BsPencil
                    onClick={() =>
                      handleEditModal(
                        techs.title,
                        techs.status,
                        techs.id
                      )
                    }
                  />
                  <FaRegTrashAlt
                    onClick={() => deleteTech(techs.id)}
                  />
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <h1>
              Você ainda não tem nenhuma tecnologia cadastrada :(
            </h1>
            <p>
              Que tal começar agora? Clique no <FaPlus /> para
              adicionar tecnologias ao seu portifólio!
            </p>
          </div>
        )}
      </StyledDiv>

      {openModal && (
        <Modal
          h3="Cadastrar Tecnologia"
          onClick={() => {
            setTimeout(() => {
              handleModal();
              setTimeout(() => {
                reset();
              }, 100);
            }, 100);
          }}
        >
          <form onSubmit={handleSubmit(onSubmitTech)}>
            <Input
              label="Nome"
              type="text"
              placeholder="Digite aqui a Tecnologia"
              register={register("title")}
              disabled={loading}
            />
            {errors.title?.message && (
              <span aria-errormessage="error">
                {errors.title.message}
              </span>
            )}

            <Input label="Selecionar Status">
              <select id="" {...register("status")}>
                <option value="">Selecione seu status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </Input>
            {errors.status?.message && (
              <span aria-errormessage="error">
                {errors.status.message}
              </span>
            )}
            <Button
              type="submit"
              pink={true}
              small={false}
              disabled={!isDirty | !isValid}
              onClick={() => {
                setTimeout(() => {
                  reset();
                }, 1200);
              }}
              innerText={
                loading ? "Cadastrando..." : "Cadastrar Tecnologia"
              }
            />
          </form>
        </Modal>
      )}

      {openEditModal && (
        <Modal
          h3="Tecnologia Detalhes"
          onClick={() => {
            setTimeout(() => {
              handleEditModal();
              setTimeout(() => {
                reset();
              }, 100);
            }, 100);
          }}
        >
          <form onSubmit={handleSubmitUpdateTech}>
            <Input
              label="Nome"
              type="text"
              placeholder={tech.title}
              defaultValue={tech.title}
              disabled="disabled"
              register={register("title")}
            />

            <Input label="Selecionar Status">
              <select
                id=""
                {...register("status")}
                defaultValue={tech.status}
                onChange={handleChange}
              >
                <option value="">Selecione seu status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </Input>

            <Button
              type="submit"
              pink={true}
              small={false}
              disabled={status ? false : true}
              onClick={() => {
                setTimeout(() => {
                  reset();
                }, 1200);
              }}
              innerText={
                loading ? "Salvando..." : "Salvar alterações"
              }
            />
          </form>
          <small>
            <Button
              pink={false}
              small={false}
              innerText="Excluir"
              onClick={() => deleteTech(tech.id)}
            />
          </small>
        </Modal>
      )}
    </>
  );
};

export default TechList;
