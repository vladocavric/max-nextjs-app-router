import React from 'react';

interface InputFieldProps {
	name: string;
	inputType: string;
}

const InputField: React.FC<InputFieldProps> = ({ name, inputType }) => {
	return (
		<p className='form-control'>
			<label htmlFor={name}>Title</label>
			<input type={inputType} id={name} name={name} />
		</p>
	);
};

export default InputField;
