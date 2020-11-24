import * as React from 'react'

import * as styled from '../../Styles/Modal'
import { Visible } from '../../Types'

function Modal ({add, setAdd}) {
	const { visible, func, catId } = add;
	const [ value, setValue ] = React.useState("");
	const [ content, setContent ] = React.useState("");

	return (
		<styled.Div display={visible}>
			<styled.Modal>
				<styled.InputDiv>
					<styled.Label>Add Content</styled.Label>
					<styled.Input
						placeholder="Add"
						value={value}
						onChange={e => setValue(e.target.value)}/>
				</styled.InputDiv>
				<styled.InputDiv>
				{visible === Visible.RECORD_ADD ?
				
				<styled.Content
					placeholder="content"
					value={content}
					onChange={e => setContent(e.target.value)}/>
				: null}
				</styled.InputDiv>
				<styled.buttonDiv>
					<styled.Button onClick={() => {
						if (value === "")
							return ;
						catId !== undefined ?
						(visible === Visible.RECORD_ADD ? func(catId, value, content) : func(catId, value)) : 
						func(value);
						setValue("");
						setContent("");
						setAdd({ visible : Visible.NONE, func : () => {}, catId : -1})
					}}>OK!</styled.Button>
					<styled.Button onClick={() => setAdd({visible : Visible.NONE, id : -1, func : () => {}})
				}>NO</styled.Button>
				</styled.buttonDiv>
			</styled.Modal>
		</styled.Div>
	)	
}

export default Modal;