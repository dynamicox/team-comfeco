import React, { useEffect, useRef, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { ConfirmModal } from "../../../Forms/ModalSuccesMessage";
import { GroupMember } from "./GroupMember";
import { useStorage } from "../../../../contexts/StorageContext";
import { LoadingSpiner } from "../../../LoadingSpiner";


export const MyGroupsCard = ({userGroup, userId, setUserGroup}) => {
	const [toggleModal, setToggleModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const { getOneDocument, leaveGroup, getProfileInfo} = useStorage()
    const [groupInfo, setGroupInfo] = useState()
    const [membersInfo, setMembersInfo] = useState([])
    const _isMounted = useRef(true);

    async function exitGroup() {
        let userToRemove ;
        groupInfo.groupUsers.forEach((doc)=>{
            if(doc.user === userId) userToRemove = doc
        })
       try {
        await leaveGroup(userGroup, userToRemove)
        if(_isMounted){
            setGroupInfo()
            setUserGroup()
            setToggleModal(false)
        }
      
       } catch (error) {
           alert(error.message)
       }
    }


    useEffect(()=>{
       async function getData() {
           try {
               setLoading(true)
                if(userGroup){
                    _isMounted && setMembersInfo([])
                    const group = await getOneDocument("groups", userGroup)
                    _isMounted && setGroupInfo(group.data())

                    group.data().groupUsers.map(async (doc)=>{
                        const member = await getProfileInfo(doc.user)
                        _isMounted && setMembersInfo(val => [...val, 
                            {username: member.data().username,
                            role: doc.role,
                            field: member.data().field
                            }])
                    })
                }
                setLoading(false)
           } catch (error) {
               
           }
       }
       getData()
       ;
    }, [userGroup])
    
    useEffect(()=>{
        return () => {
            _isMounted.current = false;
        }
    },[])

    return (
        <Card style={{backgroundColor:"#f3f3f3"}}>
            <Card.Body className="px-3 py-3" >
            {loading ?
                <LoadingSpiner />
                :
            userGroup ?  
                groupInfo && <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="mr-auto">{"Mi Grup"}o</span>
                        <Link>Ir al Grupo</Link>
                    </div>
                    <div className="bg-dark rounded text-light d-flex justify-content-between align-items-center px-2">
                        <h5 className="text_label">{groupInfo.groupName}</h5>
                        <i className={`fab fa-${groupInfo.topic.toLowerCase() || 'js'} fa-lg text-info`} />
                    </div>
                    <div style={{minHeight: "50vh"}}>
                        {membersInfo && membersInfo.map((member, idx)=>{
                           return <GroupMember 
                                    username={member.username}
                                    rol={member.role}
                                    key={idx}
                                    field={member.field}
                                    />
                        })}
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <Button size="sm" onClick={()=>{
                            setToggleModal(true)
                        }} >Abandonar</Button>
                        <Button size="sm" >Ir al Chat</Button>
                    </div>
                </div>
                :
                <div className="d-flex aling-items-center justify-content-center " style={{minHeight: "50vh"}}>
                        <div >
                            Aún no haces parte de ningún grupo
                        </div>
                </div>
            }
                <ConfirmModal
                    modalTitle="Espere"
                    ModalIcon="fas fa-exclamation-triangle text-danger"
                    toggleModal={toggleModal} 
                    modalMessage="¿Esta seguro que quiere abandonar este grupo?"
                    settoggleModal={()=>{setToggleModal(val => !val)}}
                    onConfirm={()=> exitGroup()}
                />
            </Card.Body>
        </Card>
    )
}
