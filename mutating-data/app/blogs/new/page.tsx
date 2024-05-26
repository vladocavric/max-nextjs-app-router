import React from 'react';
import BlogForm from '../../../components/blog-form';

const NewBlog = () => {
	const someAction = async (previousState, formData) => {
		'use server';
		return previousState + 1;
	};
	return (
		<div>
			<BlogForm acttion={someAction} />
		</div>
	);
};

export default NewBlog;
