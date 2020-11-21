import * as React from 'react'
import { Visible } from '../../Types'

function Modal ({del, setDel, history}) {
	const { visible, id, func, back } = del;

	return (
		<div style={{display : visible === Visible.DEL ? "block" : "none",
				backgroundColor : "rgba(0,0,0,0.9)", width : "100%", height : "100%", position : "fixed", top : 0, left : 0}}>
			<div style={{backgroundColor : "white"}}>
				<button onClick={() => {
					func(id);
					setDel({visible : Visible.NONE, id : -1, func : () => {}})
					back ? history.push('/') : null;
				}}>YES</button>
				<button onClick={() => setDel({visible : Visible.NONE, id : -1, func : () => {}})}>NO</button>
			</div>
		</div>
	)	
}

export default Modal;