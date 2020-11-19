import * as React from 'react'

function Modal ({visible, setVisible, func}) {
	let value;

	return (
		<div style={{backgroundColor : "rgba(0,0,0,0.9)", width : "100%", height : "100%", position : "fixed", top : 0, left : 0, display : visible ? "block" : "none"}}>
			<div style={{backgroundColor : "white"}}>
				<form>
					<input
						placeholder="name"
						value={value}
						onChange={e => value = e.target.value}/>
				</form>
				<button onClick={() => {
					func(value);
					setVisible(false)
				}
				}>OK!</button>
			</div>
		</div>
	)	
}

export default Modal;