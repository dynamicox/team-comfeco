import React from 'react'
import {  Button, Modal } from 'react-bootstrap';


export const ConfirmModal = ({settoggleModal, toggleModal}) => {
    return (
        <>
            <Modal centered show={toggleModal} onHide={settoggleModal} enforceFocus="false">
					<Modal.Header closeButton>
						<i className="fas fa-check fa-lg pt-2 mr-2 text-success"/>
						<h5 className="text_label pt-1">Completado.</h5>
					</Modal.Header>
					<Modal.Body className="d-flex text-center">
						<p className="text_label pt-1">Los cambios en su perfil se han guardados correctamente.</p>
						
					</Modal.Body>
					<Modal.Footer>
								<Button variant="success" onClick={settoggleModal}>
									Aceptar
								</Button>
					</Modal.Footer>
				</Modal>
        </>
    )
}
