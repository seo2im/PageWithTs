import * as React from 'react'
import { category } from '../Modules/Category'

type props = {
	categories : category [],
	add : (name : string) => void,
	del : (id : number) => void
	edit : (id : number, name : string) => void;
}

function Component ({ categories, add, del, edit } : props) {
	return (
		<div>
			{categories.map(cat => (
				<div>
					{cat.id}_{cat.name}
				</div>
			))}
			<button onClick={() => add("new")}>Add</button>
			<button onClick={() => del(0)}>Del</button>
			<button onClick={() => edit(0, "edit")}>Edit</button>
		</div>
	)
}

export default Component;