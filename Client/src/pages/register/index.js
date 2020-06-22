import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	setCurrentUser,
	userSignUpFunction,
} from '../../redux/user/user.actions';
import {
	selectCurrentUser,
	isUserLogged,
} from '../../redux/user/user.selectors';

import { SignInSection, SignInContent } from './elementStyles';
import Form from './pageComponents/form/index';
const RegisterComponent = ({ setCurrentUser, isUserLogged, registerUSer }) => {
	if (isUserLogged) {
		return <Redirect to='/' />;
	}
	const HandleSubmit = (data) => {
		registerUSer(data);
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
	registerUSer: (data) => dispatch(userSignUpFunction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
