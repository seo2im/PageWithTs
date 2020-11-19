import * as React from 'react'
import { category } from '../Modules/Category'
import { todo } from '../Modules/Todo'

type props = {
	categories : category[];
	todos : todo[];
	categoryAdd : (name) => void
}

function MainPage ({ categories, todos, categoryAdd } : props ) {
	return (
		<div>
			<h1>Record of </h1>
			<button onClick={() => categoryAdd(name)}>Add</button>
			{categories.map((cat, i) => {
				const todoList = todos.filter(todo => todo.catId === cat.id);

				<div key={i} className="CatBox">
					<p>{cat.name}</p>
					{todoList.map((todo, j) => (
						<div key={`${i}_${j}`} className="todoBox">
							{todo.name}
						</div>
					))}
				</div>
			})}
		</div>
	)
}

export default MainPage;