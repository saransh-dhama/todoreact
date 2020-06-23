import React from 'react';

import styled from 'styled-components';

const ErrorDiv = styled.div`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 60px;
	font-size: 1rem;
	background: ${(props) => props.theme.secondaryColor};
	display: flex;
	top: 65px;
	${(props) => (props.isError ? 'display:block' : 'display:none')};
	text-align: center;
	line-height: 60px;
	font-size: 1.4rem;
	.close {
		float: right;
		margin-right: 20px;
		font-size: 2em;
		font-weight: 700;
		cursor: pointer;
	}
`;
const ErrorBar = ({ error, clearError }) => {
	return (
		<ErrorDiv id='error_div' className='error_on_page' isError={error}>
			{error && (
				<>
					<span>
						{`An error occurred for this action, ${error.statusText}, ${
							error.data ? (error.data.message ? error.data.message : '') : ''
						}`}
					</span>
					<span className='close' onClick={() => clearError()}>
						x
					</span>
				</>
			)}
		</ErrorDiv>
	);
};

export default ErrorBar;
