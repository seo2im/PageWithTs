import * as React from 'react'

import * as styled from '../../Styles/Modal'
import { Visible } from '../../Types'

function Modal ({add, setAdd}) {
	const { visible, func, catId } = add;
	let value;
	let content;

	return (
		<styled.Div display={visible}>
			<styled.Modal>
				<styled.InputDiv>
					<styled.Label>Add Content</styled.Label>
					<styled.Input
						placeholder="Add"
						value={value}
						onChange={e => value = e.target.value}/>
				</styled.InputDiv>
				{visible === Visible.RECORD_ADD ?
				<form>
					<textarea
						placeholder="content"
						value={content}
						onChange={e => content = e.target.value}/>
				</form>
				: null}
				<styled.buttonDiv>
					<styled.Button onClick={() => {
						catId !== undefined ?
						(visible === Visible.RECORD_ADD ? func(catId, value, content) : func(catId, value)) : 
						func(value);
						setAdd({ visible : Visible.NONE, func : () => {}, catId : -1})
					}}>OK!</styled.Button>
				</styled.buttonDiv>
			</styled.Modal>
		</styled.Div>
	)	
}

export default Modal;