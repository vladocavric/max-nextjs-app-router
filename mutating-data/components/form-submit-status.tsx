'use client';

import { useFormStatus } from 'react-dom';

const FormSubmitState = () => {
	const { action, data, method, pending } = useFormStatus();
	if (pending) {
		return <>Creating Post...</>;
	}
	return (
		<>
			<button type='reset'>Reset</button>
			<button>Create Post</button>
		</>
	);
};

export default FormSubmitState;
