import styled from 'styled-components'
import * as Basic from './Basic'

export const basic = Basic;

export const Div = styled(Basic.Div)`
	
`

export const Title = styled(Basic.Title)`
	float : left;
	
	margin-bottom : 3rem;
`

export const Button = styled(Basic.Button)`
	margin : 0 0 0 0.5rem;
`

export const Head = styled(Basic.Horizontal)`
	float : left;
	width : 100%;
	margin-bottom : 2rem;

	align-items : flex-end;
	justify-content : space-between;

	padding-bottom : 1rem;
	border-bottom : 1px solid grey;
`
export const Wrap = styled.div<{w : string}>`
	min-width : ${({ w }) => w};
`

export const RecordTitle = styled(Basic.Title)`
	font-size : 2rem;
	display : inline-block;
	
`

export const Date = styled(Basic.Text)`
	margin-left : 2rem;
	font-size : 1rem;
	display : inline-block;
`



export const Content = styled(Basic.Text)`
	float : left;
	width : 100%;
	font-size : 1.1rem;
`



