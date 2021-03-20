import React, { useEffect, useState } from 'react'
import { Card, Image, Col, Button } from 'react-bootstrap'
import { ConfirmModal } from "../../../Forms/ModalSuccesMessage";

export const GroupCards = (props) => {
	const [toggleModal, setToggleModal] = useState(false)
	const [changeModal, setChangeModal] = useState(false)
	const [labelColor, setLabelColor] = useState('dark')

    function setLabel() {
        switch (props.groupTopic.toLowerCase()) {
            case 'react':
                setLabelColor('info')
             return  
            case 'angular':
                setLabelColor('danger')
             return
            case 'vuejs':
                setLabelColor('success')
             return   
            default:
        }
    }
    
    useEffect(()=>{
        setLabel()
    },[])

    return (
        <Col xl="3" lg="4" md="6" sm="6" xs="12" className="py-4 d-flex justify-content-center">
            <Card className=" shadow-sm" style={{maxWidth:"300px"}}>

                <Image
                src={props.groupImg || "https://picsum.photos/200"}
                height="160"
                />
                <Card.Body className="px-0">
                    <div className={`bg-${labelColor} w-50 py-0 text-center rounded-right text-light`} style={{height:'25px'}}>	
                        <i className={`fab fa-${props.groupTopic.toLowerCase()} fa-lg pt-2 mr-2`} />
                        <p>{props.groupTopic.toUpperCase() || 'Javascript'}</p>
                    </div>
                    <h5 className="text_label px-1">{ props.groupTitle || "Group Title" }</h5>
                    <p className="text-justify px-1">
                        { props.groupDescription || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil voluptatem accusamus labore eos exercitationem repudiandae"}
                    </p>
                    <div className="text-center mt-3">
                        {props.userGroup ? 
                        <Button onClick={()=>{
                            console.log(props.userGroup)
                            setToggleModal(true)
                        }}>
                            Participar
                        </Button>
                        :
                        <Button onClick={()=>{
                            props.joinGroup(props.groupId)
                            props.setUserGroup(props.groupId)
                            setChangeModal(true)
                        }}>
                            Participar
                        </Button>}
                    </div>
                </Card.Body>
            </Card>
            <ConfirmModal toggleModal={toggleModal} 
                modalTitle="Espere"
                ModalIcon="fas fa-exclamation-triangle text-warning"
                modalMessage="Usted ya forma parte de un grupo."
                settoggleModal={()=>{setToggleModal(val => !val)}} />

            <ConfirmModal toggleModal={changeModal} 
                modalMessage={`Se ha unido al grupo ${props.groupTitle} exitosamente.`}
                settoggleModal={()=>{setChangeModal(val => !val)}}
            />

        </Col>
    )
}
