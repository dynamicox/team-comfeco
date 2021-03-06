import React, {useEffect, useState} from 'react';
import { useStorage } from "../../contexts/StorageContext";
import { useAuth } from "../../contexts/AuthContext";

import { EditFormRow1 } from "./editProfileRows/FormRow1";
import { EditFormRow2 } from "./editProfileRows/FormRow2";
import { EditFormRow3 } from './editProfileRows/FormRow3';
import { EditFormRow4 } from './editProfileRows/FormRow4';
import { ConfirmModal } from "./ModalSuccesMessage";

import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const EditProfileForm = () => {
	const {editProfile, getProfileInfo} = useStorage()
	const {currentUser, reAuth} = useAuth()
	const [toggleModal, setToggleModal] = useState(false)

	const methods = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {			
		const {	email, username, country, field, gender, new_password,
				link_github, link_facebook, link_linkedin, link_twitter,
				birthday, biography, current_password } = data

			const userProfile = {
				username,
				country,
				field,
				gender,
				link_github, 
				link_facebook, 
				link_linkedin, 
				link_twitter,
				birthday, 
				biography
			}

			reAuth(current_password).then(async ()=>{
				console.log('si que si')
					// ---------------UPDATE USERNAME -----------
				if(username !== currentUser.displayName){
					try {
						await currentUser.updateProfile({
							displayName: username
						})
					} catch (error) {
						//methods.setError()
					}
				}
					// ---------------UPDATE EMAIL ------------
				if(email !== currentUser.email && email.length > 0){
					try {
						await currentUser.updateEmail(email);
					} catch (error) {
						console.log(error);
					}
				}
					// ---------------UPDATE PASSWORD --------- 
				if(new_password){
					try {
						await currentUser.updatePassword(new_password);
					} catch (error) {
						
					}
				}
				// -------------- UPDATE PROFILE INFO ----------
			try {
				await editProfile(currentUser.uid, userProfile)
				setToggleModal(val => !val)
				methods.setValue("current_password", "")
			} catch (error) {
				console.log(error)
			}
			})
			.catch((error)=>{
				methods.setError("confirmacion", {type:"manual", message: "La contraseña proporcionada es incorrecta"})
				setTimeout(() => methods.clearErrors(), 5000);
			})

			
    }	

	useEffect(async () => {
		const doc = await getProfileInfo(currentUser.uid)
		const { gender, birthday, field, country, biography } = doc.data()

		methods.setValue('gender', gender)
		methods.setValue('username', currentUser.displayName)
		methods.setValue('birthday', birthday)
		methods.setValue('field', field)
		methods.setValue('country', country)
		methods.setValue('biography', biography)
	}, [])

	return (
		<>
			<ConfirmModal toggleModal={toggleModal} settoggleModal={()=>{setToggleModal(val => !val)}}/>
			<Form className='mb-5' onSubmit={methods.handleSubmit(onSubmit)} >
                {/* --- NAME / EMAIL --- */}
				<EditFormRow1 methods={methods} username={currentUser.displayName} email={currentUser.email} />

                {/* --- GENERO/ FECHA / PAIS --- */}
				<EditFormRow2 methods={methods} />

                {/* --- AREA DE CONOCIMIENTO / PASSWORDS --- */}
                <EditFormRow3 methods={methods} />

                <h4 className='text-center text_label'>Redes Sociales</h4>

                {/* --- REDES SOCIALES / BIOGRAFIA --- */}
                <EditFormRow4 methods={methods} />
                
				<div className='w-100 text-right'>
					<Button  type="submit" className='login_button ml-3'>
						Guardar cambios
					</Button>
				</div>
			</Form>
		</>
	);
};
