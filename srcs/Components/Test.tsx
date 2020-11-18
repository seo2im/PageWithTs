import React from 'react'
import { Category } from '../Modules/Category'

type props = {
	categories : Category[],
}

function Test ({ categories } : props ) {
	return (
		<>
			{categories.map(cat => (
				<div>
					{cat.id}_{cat.name}
				</div>
			))}
		</>
	)
}

export default Test;