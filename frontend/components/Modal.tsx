import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  height: 100vh;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
const ModalCard = styled.div`
  width: 600px;
  height: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 15px;
`;
type Props = {
  children: any;
  show: boolean;
  setShow: any;
};
const ModalBody = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = ({ children, show, setShow }: Props) => {
  return (
    <>
      {show ? (
        <ModalWrapper>
          <ModalCard>
            <div
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => {
                setShow(!show);
              }}
            >
              <AiFillCloseCircle size={30} />
            </div>
            <ModalBody>{children}</ModalBody>
          </ModalCard>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Modal;
