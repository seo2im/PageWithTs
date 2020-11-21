import * as React from 'react'
import { Link } from 'react-router-dom'

import { Visible } from '../../Types'

function Modal ({done, setDone}) {
	const { visible, id, func } = done;

	return (
		<div style={{display : visible === Visible.DONE ? "block" : "none",
				backgroundColor : "rgba(0,0,0,0.9)", width : "100%", height : "100%", position : "fixed", top : 0, left : 0}}>
			<div style={{backgroundColor : "white"}}>
				<button onClick={() => {
					func(id);
					setDone({visible : Visible.NONE, id : -1, func : () => {}})
				}}>YES</button>
				<button onClick={() => setDone({visible : Visible.NONE, id : -1, func : () => {}})}>NO</button>
			</div>
		</div>
	)	
}

export default Modal;