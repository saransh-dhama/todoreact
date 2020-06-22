import styled from 'styled-components';
export const Form = styled.form`
	padding: 30px;
	font-size: 1rem;
	max-width: 400px;
	margin: auto;
	span.error {
		color: ${(props) => props.theme.secondaryColor};
	}
`;
export const EachInputDiv = styled.div`
	padding: 15px;
	font-size: 1rem;
	input {
		font-size: 1.4rem;
		width: 100%;
		border: none;
		line-height: 20px;
		outline: 0px;
		background-color: ${(props) => props.theme.background};
		border-bottom: 1px solid gray;
		color: ${(props) => props.theme.color};
		padding: 5px 5px 8px 5px;
	}
	span.message {
		display: block;
		margin-top: 5px;
		opacity: 0.7;
	}
`;
export const CheckBoxInputDiv = styled.div`
	padding: 15px;
	font-size: 1rem;
	input {
		font-size: 1.4rem;
		height: 20px;
		width: 20px;
	}
	label {
		font-size: 12px;
		margin-left: 10px;
		vertical-align: super;
	}
	span.message {
		display: block;
		margin-top: 5px;
		opacity: 0.7;
	}
`;
export const ButtonDIv = styled.div`
	padding: 15px;
	button {
		border: 0px;
		outline: none;
		border-radius: 4px;
		line-height: 40px;
		font-size: 1.6em;
		background-color: ${(props) => props.theme.primaryColor};
		color: ${(props) => props.theme.color};
		width: 100%;
		${(props) => (props.grayout ? `opacity: 0.2` : `cursor: pointer;`)}
	}
`;
