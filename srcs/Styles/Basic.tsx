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

export const Div = styled.div`
	width : calc(100% - 10rem);
	height : 100%;
	float : left;

	margin : 5rem;
`

export const Title =  styled.div`
	font-family: 'Black Han Sans', sans-serif;
	font-size : 5rem;
`

export const Button = styled.button`
	background-color : white;
	font-size : 1.5rem;
`

export const Text = styled.div`
	font-size : 3rem;
`

export const Box = styled.div`
	width : 30rem;
`

export const Link = styled(NavLink)`
	color : black;
	text-decoration : none;
	border : none;
`

export const Horizontal = styled.div`
	display : flex;
	flex-direction : row;
`