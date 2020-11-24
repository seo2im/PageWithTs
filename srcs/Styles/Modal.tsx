import styled from 'styled-components'
import * as Basic from './Basic'

export const Div = styled.div<{display : boolean}>`
	display : ${({display}) => display ? 'block' : 'none'};
	position : fixed;
	top : 0;
	left : 0;	

	background-color : rgba(0,0,0,0.9);
	
	width : 100%;
	height : 100%;
`

export const Modal = styled.div`
	background-color : white;

	width : 35rem;
	min-height : 20rem;

	margin : 20rem calc(50% - 17.5rem);
	padding : 2rem;
	border-radius : 3rem;
`

export const ModalText = styled(Basic.Text)`
	display : table;
	margin : 5rem auto;
`

export const buttonDiv = styled.div`
	display : flex;
	justify-content : space-around;
	width : 100%;
`

export const Button = styled.button`
	background-color : black;
	border : 0;
	
	width : 5rem;
	height : 2rem;
	
	color : white;
	text-align : center;
`

export const InputDiv = styled.div`
	display : table;
	margin : 3rem auto;
`

export const Label = styled.label`
	font-famliy : 'Black Han Sans', sans-serif;
	font-size : 1rem;
	margin-right : 0.5rem;
`

export const Input = styled.input`
	border : none;
	border-bottom : 1px solid #757575;

	width : 15rem;

	&:focus { 
		outline : none;
		border-bottom : 1px solid #5264AE;
	}

	font-size : 1.5rem;
`

export const Content = styled.textarea`
	border : 1px solid grey;
	box-shadow: 2px 2px 3px #999;

	width : 25rem;
	height : 13rem;
	resize : none;

	&:focus { 
		outline : none;
		border-bottom : 1px solid #5264AE;
	}

	font-size : 1.5rem;
`
