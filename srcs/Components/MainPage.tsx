import * as React from 'react'
import { Link } from 'react-router-dom' 
import { category } from '../Modules/Category'
import { todo } from '../Modules/Todo'
import Modal from './Modal'

type props = {
	categories : category[];
	todos : todo[];
	categoryAdd : (name) => void
}

function Component ({ categories, todos, categoryAdd } : props ) {
	const [ visible, setVisible ] = React.useState<boolean>(false);

	return (
		<div>
			<h1>Record of </h1>
			<button onClick={() => setVisible(true)}>Add</button>
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
			<Modal visible={visible} setVisible={setVisible} func={(name) => categoryAdd(name)}/>
		</div>
	)
}

export default Component;