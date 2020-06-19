import React from 'react';
import styled from 'styled-components';
const HomePage = styled.section`
	min-height: calc(100vh - 60px);
	background: ${(props) => props.theme.background};
`;
const Container = styled.div``;

const HomePageComponent = () => {
	return (
		<HomePage>
			<Container className='container'>
				<span>Hello this is todoapp</span>
			</Container>
		</HomePage>
	);
};

export default HomePageComponent;
