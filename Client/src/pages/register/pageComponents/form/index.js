import React from 'react';
import {
	Form,
	EachInputDiv,
	CheckBoxInputDiv,
	ButtonDIv,
} from './elementStyles';

class FormComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: {
				value: '',
				error: false,
			},
			email: {
				value: '',
				error: false,
			},
			password: {
				value: '',
				error: false,
			},
			isOfAge: false,
		};

		this.forSubmitButtonCliCked = this.forSubmitButtonCliCked.bind(this);
	}
	forSubmitButtonCliCked = (event) => {
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form);
		this.props.submitHandler({
			is18OrOlder: 'true',
			email: data.get('email'),
			password: data.get('password'),
			name: data.get('name'),
		});
		console.log({
			is18OrOlder: 'true',
			email: data.get('email'),
			password: data.get('password'),
			name: data.get('name'),
		});
	};

	render() {
		return (
			<Form onSubmit={this.forSubmitButtonCliCked}>
				<EachInputDiv>
					<input
						type='text'
						placeholder='Full Name'
						id='name'
						name='name'
						value={this.state.name.value}
						required
						onChange={(event) =>
							this.setState({
								name: {
									value: event.target.value,
									error: event.target.value ? false : true,
								},
							})
						}
					/>
					{this.state.name.error && (
						<span className='error'>Full Name is required</span>
					)}
				</EachInputDiv>
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
					<span className='message'>
						Minimun 8 letters and maximun 16 letters
					</span>
					{this.state.password.error && (
						<span className='error'>
							A password of Minimun 8 letters and maximun 16 letters is
							required.
						</span>
					)}
				</EachInputDiv>
				<CheckBoxInputDiv>
					<input
						type='checkbox'
						id='is18OrOlder'
						name='is18OrOlder'
						checked={this.state.isOfAge}
						onChange={() =>
							this.setState((previousState) => {
								return { isOfAge: !previousState.isOfAge };
							})
						}
					/>
					<label htmlFor='is18OrOlder'>I am 18 years or above.</label>
				</CheckBoxInputDiv>
				<ButtonDIv grayout={!this.state.isOfAge}>
					<button type='submit' disabled={!this.state.isOfAge}>
						Register
					</button>
				</ButtonDIv>
			</Form>
		);
	}
}

export default FormComponent;
