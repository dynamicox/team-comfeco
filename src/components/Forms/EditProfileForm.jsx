import React from 'react';
import { useStorage } from "../../contexts/StorageContext";
import { useAuth } from "../../contexts/AuthContext";

import { EditFormRow1 } from "./editProfileRows/FormRow1";
import { EditFormRow2 } from "./editProfileRows/FormRow2";
import { EditFormRow3 } from './editProfileRows/FormRow3';
import { EditFormRow4 } from './editProfileRows/FormRow4';

import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const EditProfileForm = () => {
	const {editProfile} = useStorage()
	const {currentUser} = useAuth()
	const methods = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
		const {	email, username, country, field, gender, new_password,
				link_github, link_facebook, link_linkedin, link_twitter,
				birthday, biography } = data

        console.log(currentUser.email)
        console.log(email)
		//const er = await editProfile(currentUser.uid, data)
    }

	return (
		<>
			<Form className='mb-5' onSubmit={methods.handleSubmit(onSubmit)}>

                {/* --- NAME / EMAIL --- */}
				<EditFormRow1 methods={methods} />

                {/* --- GENERO/ FECHA / PAIS --- */}
				<EditFormRow2 methods={methods} />

                {/* --- AREA DE CONOCIMIENTO / PASSWORDS --- */}
                <EditFormRow3 methods={methods} />

                <h4 className='text-center text_label'>Redes Sociales</h4>

                {/* --- REDES SOCIALES / BIOGRAFIA --- */}
                <EditFormRow4 methods={methods} />
                
				<div className='w-100 text-right'>
					<Button type='submit' className='login_button ml-3'>
						Guardar cambios
					</Button>
				</div>
			</Form>
		</>
	);
};
