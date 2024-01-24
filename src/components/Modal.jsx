import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export const confirmationModal = ({}) => {
  state = {
    abierto: false,
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  return (
    <>
      <Modal isOpen={this.state.abierto}>
        <ModalHeader>Confirmacion de compra</ModalHeader>

        <ModalBody>
          <label htmlFor="texto">Desea confirmar la compra:</label>
        </ModalBody>

        <ModalFooter>
          <button color="primary">Confirmar</button>
          <button color="secondary" onClick={this.abrirModal}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
