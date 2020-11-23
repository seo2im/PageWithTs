import styled from 'styled-components'
import * as Basic from './Basic'

export const MenuBar = styled(Basic.Horizontal)`
	float : left;
	align-items : flex-end;
	justify-content : space-between;

	width : 100%;
	margin-bottom : 2rem;
	padding-bottom : 0.5rem;
	
	border-bottom : 1px solid #D7D7D7;
`

export const Text = styled(Basic.Title)`
	font-size : 1.2rem;
`

export const Button = styled(Basic.Button)``