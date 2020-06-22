import React from 'react';
import { Form, EachInputDiv, ButtonDIv } from './elementStyles';

const FormComponent = ({ submitHandler }) => {
	return (
		<Form onSubmit={submitHandler}>
			<EachInputDiv>
				<input
					type='email'
					placeholder='Email Address'
					id='email'
					name='email'
				/>
			</EachInputDiv>
			<EachInputDiv>
				<input
					type='password'
					placeholder='Password'
					id='password'
					name='password'
				/>
				<span className='message'>
					Minimun 8 letters and maximun 16 letters
				</span>
			</EachInputDiv>
			<ButtonDIv>
				<button type='submit'>Register</button>
			</ButtonDIv>
		</Form>
	);
};

export default FormComponent;
