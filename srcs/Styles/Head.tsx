import styled from 'styled-components'
import * as Basic from './Basic'

export const HeadBackground = styled.div`
	background-color : black;

	float : left;
	width : 100%;
	margin-bottom : 2rem;

	position : relative;
`

export const HeadStack = styled.div`
	background-color : rgba(255, 255, 255, 0.5);
	clip-path : polygon(0 0, 100% 0, 80% 100%, 0% 100%);
	
	width : 100%;
`

export const Head = styled(Basic.Horizontal)`
	background-color : rgba(255, 255, 255, 0.8);
	clip-path : polygon(0 0, 80% 0, 60% 100%, 0% 100%);

	width : 100%;
	padding : 2rem 1rem;
	justify-content : space-between;
`

export const Title = styled(Basic.Title)`
	max-width : 30rem;
	overflow : hidden;
`

export const ButtonDiv = styled.div`
	width : 15rem;
	position : absolute;
	top : 20%;
	left : 75%;
`
export const Button = styled(Basic.Button)``
