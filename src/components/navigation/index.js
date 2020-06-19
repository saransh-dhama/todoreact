import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 59px;
	font-size: 1rem;
	background: ${(props) => props.theme.primaryColor};
`;
const Navigation = () => {
	return (
		<Header id='header'>
			{/* <DesktopNavigation />
			<MobileSideNavigation /> */}
			Hello
		</Header>
	);
};

export default Navigation;
