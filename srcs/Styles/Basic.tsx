import styled, { createGlobalStyle } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const GrobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

	body {
		margin : 0;
		padding : 0;	
		font-family: 'Nanum Gothic', sans-serif;
	}
`;

export const Horizontal = styled.div`
	display : flex;
	flex-direction : row;
`

export const Vertical = styled.div`
	display : flex;
	flex-direction : coloum;
`

export const Link = styled(NavLink)`
	color : black;
	text-decoration : none;
	border : none;
`

export const Div = styled.div`
	float : left;

	max-width : 50rem;
	margin : 5rem calc(50% - 25rem);
	@media only screen and (max-width: 54rem) {
		margin : 5rem 2rem;
	}
`
export const Head = styled(Horizontal)`
	float : left;
	width : 100%;
	justify-content : space-between;
	margin-bottom : 7rem;
`

export const MenuBar = styled(Horizontal)`
	float : left;
	align-items : flex-end;
	justify-content : space-between;

	width : 100%;
	margin-bottom : 2rem;
	padding-bottom : 0.5rem;
	
	border-bottom : 1px solid black;
`

export const Title =  styled.div`
	font-family: 'Black Han Sans', sans-serif;
	font-size : 5rem;

	max-width : 30rem;
	overflow : hidden;
`

export const Button = styled.button`
	background-color : white;
	
	font-size : 1.4rem;
	line-height : 1.4rem;
	height : 1.5rem;
	
	margin-right : 2rem;
	border-radius : 0.5rem;
`

export const Text = styled.div`
	font-size : 1.5rem;
`

export const Box = styled.div`
	width : 30rem;
`