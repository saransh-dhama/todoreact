import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from '../../redux/user/user.actions';
import {
	selectCurrentUser,
	isUserLogged,
} from '../../redux/user/user.selectors';

import { SignInSection, SignInContent } from './elementStyles';
import Form from './pageComponents/form/index';
const SignInComponent = ({ setCurrentUser, isUserLogged }) => {
	if (isUserLogged) {
		return <Redirect to='/' />;
	}
	const HandleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form);
		for (let input of data.keys()) {
			const value = data.get(input);
			console.log(input, value);
		}
	};
	return (
		<SignInSection className='signIn__section'>
			<div className='signIn__container container'>
				<SignInContent className='signIn__container--content'>
					<h1>New User Registeration</h1>
					<p>Please fill in the form below to register</p>
				</SignInContent>
				<div>
					<Form submitHandler={HandleSubmit} />
				</div>
			</div>
		</SignInSection>
	);
};
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	isUserLogged: isUserLogged,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
