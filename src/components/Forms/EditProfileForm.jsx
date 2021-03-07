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
	const {currentUser, reAuth, signInMethod} = useAuth()
	const [toggleModal, setToggleModal] = useState(false)
	const [thirdPartyProvider, setThirdPartyProvider] = useState(true)

	const methods = useForm({ mode: 'onChange' });

	async function updateProfile(userProfile) {
		// -------------- UPDATE PROFILE INFO ----------
			try {
				await editProfile(currentUser.uid, userProfile)
				setToggleModal(val => !val)
			} catch (error) {
				console.log(error)
			}
		// ---------------UPDATE USERNAME -----------
			if(userProfile.username !== currentUser.displayName){
				try {
					await currentUser.updateProfile({
						displayName: userProfile.username
					})
				} catch (error) {
					//methods.setError()
				}
			}
	}

    const onSubmit = async (data) => {			
		const {	email, username, country, field, gender, new_password,
				link_github, link_facebook, link_linkedin, link_twitter,
				birthday, biography, current_password } = data

					console.log(birthday)
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

			if(!thirdPartyProvider){
				reAuth(current_password).then(async (cre)=>{
					
					// ---------------UPDATE EMAIL ------------
				if(email !== currentUser.email && email.length > 0){
					try {
						await currentUser.updateEmail(email);
						methods.setValue("email", "");
					} catch (error) {
						console.log(error);
					}
				}
					// ---------------UPDATE PASSWORD --------- 
				if(new_password){
					try {
						await currentUser.updatePassword(new_password);
						methods.setValue("new_password", "");
						methods.setValue("conf_password", "");
					} catch (error) {
						console.log(error);
					}
				}
				await updateProfile(userProfile)
				methods.setValue("current_password", "");
			})
			.catch((error)=>{
				console.log(error)
				methods.setError("confirmacion", {type:"manual", message: "La contraseña proporcionada es incorrecta"})
				setTimeout(() => methods.clearErrors(), 5000);
			})
			}else{
				updateProfile(userProfile)
			}
    }	

	useEffect(async () => {
		const m = await signInMethod(currentUser.email)
		if(m[0] === 'password'){
			setThirdPartyProvider(false)
		}
		const doc = await getProfileInfo(currentUser.uid)
		
		if(doc.exists){

			const { gender, birthday, field, country, biography } = doc.data()
			methods.setValue('gender', gender || "")
			methods.setValue('username', currentUser.displayName)
			methods.setValue('birthday', birthday)
			methods.setValue('field', field)
			methods.setValue('country', country)
			methods.setValue('biography', biography)
		}
	}, [])

	return (
		<>
			{/* -------MENSAJE DE CONFIRMACION-------- */}
			<ConfirmModal toggleModal={toggleModal} 
			modalMessage="Los cambios en su perfil se han guardados correctamente." 
			settoggleModal={()=>{setToggleModal(val => !val)}}/>

			<Form className='mb-5' onSubmit={methods.handleSubmit(onSubmit)} >
                {/* --- NAME / EMAIL --- */}
				<EditFormRow1 methods={methods} username={currentUser.displayName} email={currentUser.email} thirdParty={thirdPartyProvider} />

                {/* --- GENERO/ FECHA / PAIS --- */}
				<EditFormRow2 methods={methods} />

                {/* --- AREA DE CONOCIMIENTO / PASSWORDS --- */}
                <EditFormRow3 methods={methods} thirdParty={thirdPartyProvider} />

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
