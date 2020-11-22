import styled from 'styled-components'
import * as Basic from './Basic'

export const Div = styled(Basic.Div)`

`

export const Title = styled(Basic.Title)`
	float : left;
	
	margin-bottom : 3rem;
`

export const Button = styled(Basic.Button)`
	margin-left : 2rem;
`

export const TodoDiv = styled(Basic.Horizontal)`
	float : left;
	width : 100%;

	border-bottom : 2px solid black;
	margin-bottom : 1.5rem;

	justify-content : space-around;
`

export const Todo = styled.div`
	flex-direction : column;

	font-family : 'Black Han Sans', sans-serif;
	font-size : 2rem;
`

export const TodoBox = styled.div`
	border : 2px solid black;

	width : 10rem;
	min-height : 9rem;
	margin : 0.5rem 1rem;

	font-family : 'Nanum Gothic', sans-serif;
	font-size : 1rem;
`

export const TodoItem = styled(Basic.Horizontal)`
	
`

export const RecordDiv = styled.div`
	float : left;
	width : 100%;

	font-size : 2rem;
`

export const RecordItem = styled(Basic.Horizontal)`
	justify-content : space-between;
	align-items : flex-end;

	margin-top : 1.5rem;
`

export const RecrodName = styled(Basic.Title)`
	font-size : 1.3rem;
`

export const Date = styled(Basic.Text)`
	font-size : 0.8rem;
`

export const Link = styled(Basic.Link)`

`
