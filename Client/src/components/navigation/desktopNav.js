import React from 'react';
import styled from 'styled-components';

const NavigationBarDesktop = styled.nav`
	padding: 8px 30px;
	margin: auto;
	width: 100%;
`;
const LinkList = styled.ul`
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr repeat(1, 450px);

	grid-gap: 20px;
	padding: 0px;
	li {
		list-style: none;
		font-size: 1.6rem;
		text-align: center;
		cursor: pointer;
	}
	@media (max-width: 812px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 0px;
		padding: 0px;
		align-items: center;
	}
`;
const LogoBlock = styled.li`
	grid-column: 1 / 2;
	justify-self: start;
	font-weight: ${(props) => props.theme.fontBold};
`;
const MenuBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr repeat(3, 1fr);
	align-items: center;
	@media (max-width: 812px) {
		display: grid;
		grid-template-columns: 1fr;
		position: absolute;
		right: 0;
		width: 100%;
		grid-row-gap: 0px;
		display: none;
	}
`;
const ToggleSwitch = styled.li`
	display: flex;
	justify-content: start;
	align-items: center;
	span {
		font-size: 1rem;
	}
	@media (max-width: 812px) {
		justify-content: flex-end;
	}
	input {
		display: none;
		&,
		&:after,
		&:before,
		& *,
		& *:after,
		& *:before,
		& label {
			box-sizing: border-box;
			&::selection {
				background: none;
			}
		}

		+ label {
			outline: 0;
			margin-left: 15px;
			width: 3em;
			height: 1em;
			position: relative;
			cursor: pointer;
			user-select: none;
			&:after,
			&:before {
				position: relative;
				display: block;
				content: '';
				width: 50%;
				height: 100%;
			}

			&:after {
				left: 0;
			}

			&:before {
				display: none;
			}
			padding: 2px;
			transition: all 0.2s ease;
			border: 2px solid ${(props) => props.theme.colorInvert};
			border-radius: 2em;
			&:after {
				transition: all 0.2s ease;
				background: ${(props) => props.theme.colorInvert};
				content: '';
				border-radius: 1em;
			}
		}

		&:checked + label {
			border: 2px solid ${(props) => props.theme.colorInvert};
			&:after {
				left: 50%;
				background: ${(props) => props.theme.colorInvert};
			}
		}
	}
`;
const DesktopNavigation = ({ theme, switchTheme, isUserLogged, signOut }) => {
	return (
		<NavigationBarDesktop>
			<LinkList>
				<LogoBlock>
					<a href='/'>To-DO</a>
				</LogoBlock>
				<MenuBlock>
					<li>
						<a href='/todo'>Tasks</a>
					</li>
					{!isUserLogged ? (
						<>
							<li>
								<a href='/register'>Register</a>
							</li>
							<li>
								<a href='/sign-in'>Sign-In</a>
							</li>
						</>
					) : (
						<li onClick={signOut}>
							<span>Sign-Out</span>
						</li>
					)}
					<ToggleSwitch className='switchLi'>
						<span>Switch Theme</span>
						<input
							type='checkbox'
							id='theme_switch'
							checked={theme !== 'dark'}
							onChange={switchTheme}
						/>
						<label htmlFor='theme_switch'></label>
					</ToggleSwitch>
				</MenuBlock>
			</LinkList>
		</NavigationBarDesktop>
	);
};

export default DesktopNavigation;
