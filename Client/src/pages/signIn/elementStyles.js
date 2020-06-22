import styled from 'styled-components';
export const SignInSection = styled.section`
	padding-top: 80px;
	font-size: 1rem;
	background-color: ${(props) => props.theme.background};
	height: 100vh;
`;
export const SignInContent = styled.div`
	text-align: center;

	h1 {
		font-size: 4em;
		font-weight: 700;
		color: ${(props) => props.theme.color};
		margin-bottom: 20px;
	}
	p {
		font-size: 1.6em;
	}
`;
export const SignInButtonRow = styled.div`
	max-width: 600px;
	margin: auto;
`;
export const SignInButtonDiv = styled.div`
	text-align: center;
	padding-top: 60px;
	button {
		font-size: 1.7em;
		text-transform: none;
		min-width: 180px;
	}
	.signIn__button--facebook {
		background-color: #3b5998;
		color: white;
		padding: 11px 35px;
		border-radius: 0px;
	}
	div:first-child {
		margin: auto;
		box-shadow: none !important;
	}
	.kep-login-facebook {
		padding: 11px;
	}
	@media only screen and (max-width: 812px) {
		padding-top: 15px;
		max-width: 100%;
		left: 0;
		right: 0;
		margin: auto;
		.signIn__button--facebook {
			width: 240px;
		}
	}
`;
