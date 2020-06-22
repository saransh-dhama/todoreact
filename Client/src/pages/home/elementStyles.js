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
export const ButtonsRow = styled.div`
	width: 100%;
	max-width: 600px;
	margin: auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 30px;
	margin-top: 30px;
`;
export const ButtonsRowSingle = styled.div`
	width: 100%;
	max-width: 300px;
	margin: auto;
	display: grid;
	grid-template-columns: 1fr;
	grid-column-gap: 30px;
	margin-top: 30px;
`;
export const Button = styled.button`
	border: 0px;
	outline: none;
	border-radius: 4px;
	line-height: 40px;
	font-size: 1.6em;
	background-color: ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.color};
	cursor: pointer;
`;
