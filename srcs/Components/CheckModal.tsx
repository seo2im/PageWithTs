import * as React from 'react'
import { Link } from 'react-router-dom'

function CheckModal ({visible, setVisible, func, link}) {

	return (
		<div style={{backgroundColor : "rgba(0,0,0,0.9)", width : "100%", height : "100%", position : "fixed", top : 0, left : 0, display : visible ? "block" : "none"}}>
			<div style={{backgroundColor : "white"}}>
				<Link to={link}>
				<button onClick={() => {
					func();
					setVisible(false)
				}}>YES</button>
				</Link>
				<button onClick={() => setVisible(false)}>NO</button>
			</div>
		</div>
	)	
}

export default CheckModal;