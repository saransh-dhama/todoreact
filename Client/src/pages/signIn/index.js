import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { userSignInFunction } from '../../redux/user/user.actions';
import {
	isUserLogged,
	getDataPending,
	getDataError,
} from '../../redux/user/user.selectors';

import { SignInSection, SignInContent } from './elementStyles';
import Form from './pageComponents/form/index';
const SignInComponent = ({ signInUser, isUserLogged }) => {
	if (isUserLogged) {
		return <Redirect to='/' />;
	}
	const HandleSubmit = async (data) => {
		signInUser(data);
	};
	return (
		<SignInSection className='signIn__section'>
			<div className='signIn__container container'>
				<SignInContent className='signIn__container--content'>
					<h1>Welcome back, Sign In</h1>
					<p>Please fill in the form below to sign-in</p>
				</SignInContent>
				<div>
					<Form submitHandler={HandleSubmit} />
				</div>
			</div>
		</SignInSection>
	);
};
const mapStateToProps = createStructuredSelector({
	isUserLogged: isUserLogged,
	error: getDataError,
	pending: getDataPending,
});
const mapDispatchToProps = (dispatch) => ({
	signInUser: (user) => dispatch(userSignInFunction(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
