import styled from 'styled-components';
export const HomePage = styled.section`
	min-height: calc(100vh - 60px);
	background: ${(props) => props.theme.background};
`;
export const Container = styled.div``;
export const InputDiv = styled.div`
	padding: 15px;
	padding-top: 30px;
	input {
		line-height: 40px;
		font-size: 1.4em;
		border-radius: 4px;
		width: 100%;
		outline: none;
		border: none;
		background: ${(props) => props.theme.elevated};
		color: ${(props) => props.theme.color};
		padding: 0px 15px;
	}
`;
export const ListsContainerDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 30px;
	padding: 30px 15px;
`;
export const ListDiv = styled.div`
	h2 {
		background-color: ${(props) => props.theme.background};
		margin: 0;
		padding: 15px;
		border: 2px solid ${(props) => props.theme.elevated};
		font-size: 1.4em;
	}
`;
