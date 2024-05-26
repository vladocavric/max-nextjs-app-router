'use client';
import { useActionState } from 'react';
// import React from 'react';
import InputField from './input-field';
import FormSubmitState from './form-submit-status';

const PostsForm = ({ action }: { action: any }) => {
	const [state, formAction] = useActionState(action, 0);
	return (
		<>
			<h1>Create a new post</h1>
			<form action={action}>
				<InputField inputType='text' name='title' />
				<p className='form-control'>
					<label htmlFor='image'>Image URL</label>
					<input
						type='file'
						accept='image/png, image/jpeg'
						id='image'
						name='image'
					/>
				</p>
				<p className='form-control'>
					<label htmlFor='content'>Content</label>
					<textarea id='content' name='content' rows={5} />
				</p>
				<p className='form-actions'>
					<FormSubmitState />
				</p>
			</form>
		</>
	);
};

export default PostsForm;
