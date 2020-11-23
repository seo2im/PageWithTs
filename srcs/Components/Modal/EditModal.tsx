import * as React from 'react'
import { Visible } from '../../Types'

import * as styled from '../../Styles/Modal'

function Modal ({edit, setEdit}) {
	const { visible, id, func } = edit;
	let value;

	const D = new Date();
	const date = `${D.getFullYear()/100}.${D.getMonth()}.${D.getDate()}`;
	let content;

	return (
		<styled.Div display={visible}>
			<styled.Modal>
				<styled.InputDiv>
					<styled.Label>Edit Name</styled.Label>
					<styled.Input
						placeholder="name"
						value={value}
						onChange={e => value = e.target.value}/>
				</styled.InputDiv>
				{visible === Visible.RECORD_EDIT ?
				<form>
					<textarea
						placeholder="content"
						value={content}
						onChange={e => content = e.target.value}/>
				</form>
				: null}
				<styled.buttonDiv>
				<styled.Button onClick={() => {
					visible === Visible.RECORD_EDIT ?
					func(id, value, date, content)
					: func(id, value);
					setEdit({visible : Visible.NONE, id : -1, func : () => {}});
				}
				}>OK!</styled.Button>
				</styled.buttonDiv>
			</styled.Modal>
		</styled.Div>
	)	
}

export default Modal;