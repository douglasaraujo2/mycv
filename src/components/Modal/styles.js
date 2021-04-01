import styled from 'styled-components';

export const Modal = styled.div`
  display: ${props => props.showModal ? 'block' : 'none'}!important;
  z-index:1072;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  outline: 0;
  &.fade{
    opacity:0;
    transition: opacity .15s linear;
  }
  &.fade.show{
    opacity:1;
  }
  `;

export const ModalDialog = styled.div`
  transform: translate(0,0);
  position: relative;
  width: auto;
  margin: .5rem;
  pointer-events: none;
  @media(min-width:576px){
    max-width: 500px;
    margin: 0.70rem auto;
  }
  `;

export const ModalContent = styled.div`
  position: relative;
  display:flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1p solid rgba(0,0,0,.2);
  border-radius: .3rem;
  outline:0;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:space-between;
  padding:1rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
  h5{
    margin-bottom:0;
    line-height: 1.5;
  }
`;

export const ModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  max-height: 400px;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  /* border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
  .close{
    margin: 10px;
  } */
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  z-index:999;
  background: rgba(0,0,0,0.6);
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: auto;
  margin: .5rem;
  pointer-events: none;
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index:10;
  border-radius: 10px;
  background-clip: padding-box;
  transform: translate(0,0);
  overflow-y:auto;
  overflow-x: none;
  @media(min-width: 576px){
    max-width: 500px;
    margin:1.75rem auto;
  }
`;



export const CloseModalButton = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 15px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;





export const Divider = styled.div`
  border:0;
  border-top: 1px solid #ddd;
  margin: 10px;
`;
