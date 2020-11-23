import styled from 'styled-components'
import * as Basic from './Basic'

export const Div = styled(Basic.Div)`
	
`

export const Head = styled(Basic.Horizontal)`
	float : left;
	width : 100%;
	justify-content : space-between;
	margin-bottom : 7rem;
`

export const Title = styled(Basic.Title)`
	
`

export const CatDiv = styled.div`
	float : left;
	display : flex;
	
	width : 100%;
	margin-bottom : 3rem;
`

export const Cat = styled(Basic.Title)`
	font-size : 1.5rem;
	word-wrap : break;
	overflow : hidden;

	width : 10rem;
	margin-right : 1rem;
`

export const TodoBox = styled(Basic.Box)`
	flex-direction : column;
	padding : 0 1rem 0 1rem;
`

export const Todo = styled(Basic.Text)`
	margin-bottom : 1rem;

	font-size : 1.5rem;
`

export const Link = styled(Basic.Link)`

`

