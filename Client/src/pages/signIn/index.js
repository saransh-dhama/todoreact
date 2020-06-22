import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	setCurrentUser,
	userSignInFunction,
} from '../../redux/user/user.actions';
import {
	selectCurrentUser,
	isUserLogged,
	getDataPending,
	getDataError,
} from '../../redux/user/user.selectors';

import { SignInSection, SignInContent } from './elementStyles';
import Form from './pageComponents/form/index';
const SignInComponent = ({ setCurrentUser, userData, isUserLogged }) => {
	useEffect(() => {
		userData();
	}, []);
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
	currentUser: selectCurrentUser,
	isUserLogged: isUserLogged,
	error: getDataError,
	pending: getDataPending,
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	userData: () => dispatch(userSignInFunction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
