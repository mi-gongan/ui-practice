import React,{useState} from 'react'
import Modal from '../components/Modal'
import styled from '@emotion/styled'

const Container=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100vh;
`;

const Button=styled.button`
  width:280px;
  height:60px;
  border-radius:12px;
  color:white;
  background-color:#3d6afe;
  margin:0;
  border:none;
  font-size:24px;
  &:active{
    opacity:0.8;
  }
`
const ModalBody=styled.div`
  border-radius:8px;
  box-shadow:0 1px 3px 0 rgba(0,0,0,0.1);
  background:white;
  max-height:calc(100vh-16px);
  overflow:hidden auto;
  position:relative;
  padding-block:12px;
  padding-inline:24px;
`;


function ModalPage() {
  const [isOpen,setIsOpen]=useState(false);

  const handleOpen=()=>{
    console.log('open')
    setIsOpen(true)
  }
  const handleClose=()=>{
    console.log('close')
    setIsOpen(false)
  }

  return (
    <Container>
      <Button onClick={handleOpen}>Open</Button>
      <Modal isOpen={isOpen} onClose={handleClose} selector="modal-root">
        <ModalBody>
          <h2>Title</h2>
          <p>hi</p>
        </ModalBody>
      </Modal>
    </Container>
  )
}

export default ModalPage