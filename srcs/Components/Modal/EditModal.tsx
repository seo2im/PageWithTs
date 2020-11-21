import * as React from 'react'
import { Visible } from '../../Types'


function Modal ({edit, setEdit}) {
	const { visible, id, func } = edit;
	let value;

	const D = new Date();
	const date = `${D.getFullYear()/100}.${D.getMonth()}.${D.getDate()}`;
	let content;

	return (
		<div style={{display : (visible === Visible.EDIT) || (visible ===Visible.RECORD_EDIT) ? "block" : "none",
				backgroundColor : "rgba(0,0,0,0.9)", width : "100%", height : "100%", position : "fixed", top : 0, left : 0}}>
			<div style={{backgroundColor : "white"}}>
				<form>
					<input
						placeholder="name"
						value={value}
						onChange={e => value = e.target.value}/>
				</form>
				{visible === Visible.RECORD_EDIT ?
				<form>
					<textarea
						placeholder="content"
						value={content}
						onChange={e => content = e.target.value}/>
				</form>
				: null}
				<button onClick={() => {
					visible === Visible.RECORD_EDIT ?
					func(id, value, date, content)
					: func(id, value);
					setEdit({visible : Visible.NONE, id : -1, func : () => {}});
				}
				}>OK!</button>
			</div>
		</div>
	)	
}

export default Modal;