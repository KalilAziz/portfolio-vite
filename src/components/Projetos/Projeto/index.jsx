import { useState } from 'react';
import Modal from 'react-modal';
import { Div } from './styles';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

/* eslint-disable */
const Projeto = ({
  id,
  nome,
  imagem,
  descricao,
  tecnologias,
  gitHub,
  demo,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <Div>
      <img src="./image/git.png" alt="" />
      <div className="conteudo">
        <span>{nome}</span>
        <Link onClick={handleOpenModal} className="linkButton" to="/">
          Ver detalhes!
        </Link>
      </div>

      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        overlayClassName="Overlay"
        className="Modal"
      >
        <div className="modal-box">
          <IoClose
            className="icon-close"
            size={45}
            onClick={handleCloseModal}
          />
          <h2>
            {id} - {nome}
          </h2>
          <div className="container">
            <div className="projeto">
              <div className="image">
                <img src="./image/git.png" alt="" />
              </div>
              <div className="conteudo">
                <div className="desc">
                  <h3>Descrição:</h3>
                  <div>{descricao}</div>
                </div>
                <div className="tecnos">
                  <h3>Tecnologias:</h3>
                  <div className="tecno">
                    {tecnologias.map((tecnologia) => (
                      <button key={0}>{tecnologia}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="divugacacao">
              <Link onClick={handleOpenModal} className="linkButton" to="/">
                Github
              </Link>
              <Link onClick={handleOpenModal} className="linkButton" to="/">
                Demonstração
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </Div>
  );
};

export default Projeto;
