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
	
	margin-bottom : 7rem;

	justify-content : space-around;
`

export const Todo = styled.div`
	flex-direction : column;

	width : 18rem;
	font-family : 'Black Han Sans', sans-serif;
	font-size : 2rem;
`

export const TodoBox = styled.div`
	width : (100% - 1rem);
	height : 100%;
	overflow-x : hidden;

	padding : 0.5rem;
	margin-right : 1rem;

	font-family : 'Nanum Gothic', sans-serif;
	font-size : 1rem;

	border : 0.2px solid #999;
	border-radius : 0.3rem;
	box-shadow: 2px 2px 3px #999;
`

export const Arrow = styled.div`
	background-color : black;
	width : 5rem;
	height : 5rem;

	margin : 5rem 1rem;
	clip-path : polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
`

export const TodoItem = styled(Basic.Horizontal)`
	justify-content : space-between;
	align-items : center;
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
