import * as React from 'react'

import * as styled from '../../Styles/Basic'

type props = {
	menu : string,
	button : {
		name : string,
		onClick : () => void
	}
}

function MenuBar ({ menu, button : { name, onClick} } : props ) {

	return (
		<styled.MenuBar>
			<styled.Text>{menu}</styled.Text>
			<styled.Button onClick={onClick}>{name}</styled.Button>
		</styled.MenuBar>
	)
}

export default MenuBar;