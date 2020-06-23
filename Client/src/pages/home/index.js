import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from '../../redux/user/user.actions';
import {
	selectCurrentUser,
	isUserLogged,
} from '../../redux/user/user.selectors';

import {
	SignInSection,
	SignInContent,
	ButtonsRow,
	Button,
	ButtonsRowSingle,
} from './elementStyles';
const SignInComponent = ({ setCurrentUser, isUserLogged }) => {
	const history = useHistory();
	// if (isUserLogged) {
	// 	return <Redirect to='/' />;
	// }
	return (
		<SignInSection className='signIn__section'>
			<div className='signIn__container container'>
				<SignInContent className='signIn__container--content'>
					<h1>Welcome to Scratch that!</h1>
					<p>To start adding todos, please sign up or sign in</p>
					<p>if you already have an account</p>
				</SignInContent>
				{isUserLogged ? (
					<ButtonsRowSingle>
						<Button onClick={() => history.push('/todo')}>
							Manage your tasks
						</Button>
					</ButtonsRowSingle>
				) : (
					<ButtonsRow>
						<Button onClick={() => history.push('/register')}>Sign Up</Button>
						<Button onClick={() => history.push('/sign-in')}>Sign In</Button>
					</ButtonsRow>
				)}
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
