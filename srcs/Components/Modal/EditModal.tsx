import * as React from 'react'
import { Visible } from '../../Types'

import * as styled from '../../Styles/Modal'

function Modal ({edit, setEdit}) {
	const { visible, id, func, data } = edit;
	const { name, content } = data;

	const [ value, setValue ] = React.useState<string>("");
	const [ newContent, setNewContent ] = React.useState<string>("");

	React.useEffect(() => {
		name !== undefined ? setValue(name) : 0;
	}, [name])

	React.useEffect(() => {
		content !== undefined ? setNewContent(content) : 0;
	}, [content])

	const D = new Date();
	const date = `${D.getFullYear()/100}.${D.getMonth()}.${D.getDate()}`;

	return (
		<styled.Div display={visible}>
			<styled.Modal>
				<styled.InputDiv>
					<styled.Label>Edit Name</styled.Label>
					<styled.Input
						placeholder="name"
						value={value}
						onChange={e => setValue(e.target.value)}/>
				</styled.InputDiv>
				<styled.InputDiv>
					{visible === Visible.RECORD_EDIT ?
					<styled.Content
						placeholder="content"
						value={newContent}
						onChange={e => setNewContent(e.target.value)}/>
					: null}
				</styled.InputDiv>
				<styled.buttonDiv>
				<styled.Button onClick={() => {
					if (value === "")
						return ;
					visible === Visible.RECORD_EDIT ?
					func(id, value, date, newContent)
					: func(id, value);
					setEdit({visible : Visible.NONE, id : -1, func : () => {}, data : {}});
				}
				}>OK!</styled.Button>
				<styled.Button onClick={() => setEdit({visible : Visible.NONE, id : -1, func : () => {}, data : {}})
				}>NO</styled.Button>
				</styled.buttonDiv>
			</styled.Modal>
		</styled.Div>
	)	
}

export default Modal;