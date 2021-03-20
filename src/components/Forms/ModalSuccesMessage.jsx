import React from 'react'
import {  Button, Modal } from 'react-bootstrap';


export const ConfirmModal = ({settoggleModal, toggleModal, modalMessage, onConfirm, modalTitle, ModalIcon}) => {
    return (
        <>
            <Modal centered show={toggleModal} onHide={settoggleModal} >
					<Modal.Header closeButton>
                        <i className={` ${ModalIcon || "fas fa-check text-success"} fa-lg pt-2 mr-2 `}/>
						<h5 className="text_label pt-1">{modalTitle || 'Completado.'}</h5>
					</Modal.Header>
					<Modal.Body className="d-flex text-center">
						<p className="text_label pt-1">{modalMessage}</p>
						
					</Modal.Body>
					<Modal.Footer>
						{onConfirm ? <div>
                            <Button variant="danger" className="mr-3" onClick={()=>{
                            settoggleModal()
                            }}>
                            Cancelar
                            </Button>
                        <Button  onClick={()=>{
                            onConfirm()
                        }}>
                            Aceptar
                        </Button>
                        </div>  
                        :
                        <Button variant="success" onClick={()=>{
                            settoggleModal()
                        }}>
                            Aceptar
                        </Button>
                        }
					</Modal.Footer>
				</Modal>
        </>
    )
}
