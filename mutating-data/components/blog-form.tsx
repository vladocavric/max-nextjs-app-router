'use client';
import React, { useActionState } from 'react';
import InputField from './input-field';

const BlogForm = ({ action }: { action: any }) => {
	const [state, formAction] = useActionState(action, null);
	return (
		<div>
			<form action={formAction}>
				<InputField inputType='text' name='title' />
				<InputField inputType='text' name='author' />
				<InputField inputType='date' name='date' />
			</form>
		</div>
	);
};

export default BlogForm;
