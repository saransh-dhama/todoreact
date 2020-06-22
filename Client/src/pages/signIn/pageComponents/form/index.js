import React from 'react';
import { Form, EachInputDiv, ButtonDIv } from './elementStyles';

class FormComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: {
				value: '',
				error: false,
			},
			password: {
				value: '',
				error: false,
			},
		};

		this.forSubmitButtonCliCked = this.forSubmitButtonCliCked.bind(this);
	}
	forSubmitButtonCliCked = (event) => {
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form);
		for (let input of data.keys()) {
			const value = data.get(input);
			console.log(input, value);
		}
	};

	render() {
		return (
			<Form onSubmit={this.forSubmitButtonCliCked}>
				<EachInputDiv>
					<input
						type='email'
						placeholder='Email Address'
						id='email'
						name='email'
						value={this.state.email.value}
						required
						onChange={(event) =>
							this.setState({
								email: {
									value: event.target.value,
									error: event.target.value ? false : true,
								},
							})
						}
					/>
					{this.state.email.error && (
						<span className='error'>
							Email of the form abc@xyz.com is required
						</span>
					)}
				</EachInputDiv>
				<EachInputDiv>
					<input
						type='password'
						placeholder='Password'
						id='password'
						name='password'
						value={this.state.password.value}
						required
						onChange={(event) =>
							this.setState({
								password: {
									value: event.target.value,
									error: event.target.value ? false : true,
								},
							})
						}
					/>
					{this.state.password.error && (
						<span className='error'>
							A password of Minimun 8 letters and maximun 16 letters is
							required.
						</span>
					)}
				</EachInputDiv>
				<ButtonDIv>
					<button type='submit'>Sign In</button>
				</ButtonDIv>
			</Form>
		);
	}
}

export default FormComponent;
