import React from 'react';
import styled from 'styled-components';
const Path = styled.path``;
const CheckSvg = () => (
	<svg version='1.1' id='check_Svg' viewBox='0 0 21.8 21.8'>
		<g>
			<Path
				id='circle'
				d='M10.9,0C4.9,0,0,4.9,0,10.9s4.9,10.9,10.9,10.9s10.9-4.9,10.9-10.9S16.9,0,10.9,0z M10.9,20.5c-5.3,0-9.7-4.3-9.7-9.7
		s4.3-9.7,9.7-9.7s9.7,4.3,9.7,9.7S16.2,20.5,10.9,20.5z'
			/>
			<Path
				id='tick'
				d='M9.7,13l-2.6-2.6l-0.9,0.9l3,3c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2l6-6l-0.9-0.9L9.7,13z'
			/>
		</g>
	</svg>
);
export default CheckSvg;
