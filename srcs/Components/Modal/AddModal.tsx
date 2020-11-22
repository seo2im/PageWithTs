import * as React from 'react'
import { Visible } from '../../Types'

function Modal ({add, setAdd}) {
	const { visible, func, catId } = add;
	let value;
	let content;

	console.log(catId);

	return (
		<div style={{display : (visible === Visible.ADD) || (visible === Visible.RECORD_ADD) ? "block" : "none",
				backgroundColor : "rgba(0,0,0,0.9)", width : "100%", height : "100%", position : "fixed", top : 0, left : 0}}>
			<div style={{backgroundColor : "white"}}>
				<form>
					<input
						placeholder="name"
						value={value}
						onChange={e => value = e.target.value}/>
				</form>
				{visible === Visible.RECORD_ADD ?
				<form>
					<textarea
						placeholder="content"
						value={content}
						onChange={e => content = e.target.value}/>
				</form>
				: null}
				<button onClick={() => {
					catId !== undefined ?
					(visible === Visible.RECORD_ADD ? func(catId, value, content) : func(catId, value)) : 
					func(value);
					setAdd({ visible : Visible.NONE, func : () => {}, catId : -1})
				}
				}>OK!</button>
			</div>
		</div>
	)	
}

export default Modal;