import * as React from 'react'

import * as styled from '../../Styles/Head'

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
		<styled.HeadBackground>
		<styled.HeadStack>
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
		</styled.HeadStack>
		</styled.HeadBackground>
	)
}

export default Head;