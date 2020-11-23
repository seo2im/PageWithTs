import * as React from 'react'

import * as styled from '../../Styles/Basic'

type button = {
	name : string,
	onClick : () => void
}

type props = {
	title : string,
	button ? : button[]
}

function Head ({ title, button } : props ) {
	return (
		<styled.Head>
			<styled.Title>{title}</styled.Title>
			<div>
			{button ?
			button.map(e => (
				<styled.Button onClick={e.onClick}>{e.name}</styled.Button>
			))
			: null}
			</div>
		</styled.Head>
	)
}

export default Head;