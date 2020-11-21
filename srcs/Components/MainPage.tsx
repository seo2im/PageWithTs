import * as React from 'react'
import { Link } from 'react-router-dom' 
import { category } from '../Modules/Category'
import { todo } from '../Modules/Todo'
import { Visible } from '../Types' 
import AddModal from './Modal/AddModal'
import { useSelector } from 'react-redux'

type props = {
	categories : category[];
	todos : todo[];
	categoryAdd : (name) => void
}

function Component ({ categories, todos, categoryAdd } : props ) {
	const [ add, setAdd ] = React.useState<{}>({visible : Visible.NONE, func : () => {}});

	console.log(categories)

	return (
		<div>
			<h1>Record of </h1>
			<button onClick={() => setAdd({visible : Visible.ADD, func : categoryAdd})}>Add</button>
			{categories.map((cat, i) => {
				const todoList = todos.filter(todo => todo.catId === cat.id);
				return (
					<Link to={`/Category/${cat.id}`}>
						<div className="CatBox">
							<p>{cat.name}</p>
							{todoList.map((todo, j) => (
								<div className="todoBox">
									{todo.name}
								</div>
							))}
						</div>
					</Link>
				)
			})}
			<AddModal add={add} setAdd={setAdd} />
		</div>
	)
}

export default Component;