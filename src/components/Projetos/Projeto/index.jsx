import { useState } from 'react';
import Modal from 'react-modal';
import { Div } from './styles';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

/* eslint-disable */
const Projeto = ({ id, nome, imagem, descricao, tecnologias, gitHub, demo }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  console.log(id, nome, imagem, descricao, tecnologias, gitHub, demo);
  return (
    <Div>
      <img src="./image/imageProjeto.jpeg" alt="" />
      <div className="conteudo">
        <span>{nome}</span>
          <Link onClick={handleOpenModal} className="linkButton" to="/">
            Entrar em contato
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
                <img src="./image/imageProjeto.jpeg" alt="" />
                <img src="./image/imageProjeto.jpeg" alt="" />
              </div>
              <div className="conteudo">
                <div className="desc">
                  <h3>Descrição:</h3>
                  <p>{descricao}</p>
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
              <button style={{ marginRight: '10px' }}>Github</button>
              <button>Demo</button>
            </div>
          </div>
        </div>
      </Modal>
    </Div>
  );
};

export default Projeto;
