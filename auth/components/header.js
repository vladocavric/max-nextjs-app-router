'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import { logout } from '@/actions/auth';

const Header = () => {
	const [formState, formAction] = useFormState(logout, {});
	return (
		<header id='auth-header'>
			<p>welcome back</p>
			<form action={formAction}>
				<button>logout</button>
			</form>
		</header>
	);
};

export default Header;
