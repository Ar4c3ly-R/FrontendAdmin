import React from 'react';
import './input.css';

export const Input = ({ id, className, type, placeholder, onChange }) => {
	return (
		<input
			id={id}
			type={type}
			className={className}
			placeholder={placeholder}
			onChange={onChange}
		></input>
	);
};
