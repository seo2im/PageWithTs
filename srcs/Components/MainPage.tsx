import * as React from 'react'
import { Link } from 'react-router-dom' 
import { category } from '../Modules/Category'
import { todo } from '../Modules/Todo'
import { Visible } from '../Types' 
import AddModal from './Modal/AddModal'
import { useSelector } from 'react-redux'

import * as styled from '../Styles/MainPage'

type props = {
	categories : category[];
	todos : todo[];
	categoryAdd : (name) => void
}

function Component ({ categories, todos, categoryAdd } : props ) {
	const [ add, setAdd ] = React.useState<{}>({visible : Visible.NONE, func : () => {}});

	return (
		<styled.Div>
			<styled.Title>
				Record of 
				<styled.Button onClick={() => setAdd({visible : Visible.ADD, func : categoryAdd})}>Add</styled.Button>
			</styled.Title>
			{categories.map((cat, i) => {
				const todoList = todos.filter(todo => todo.catId === cat.id);
				const { id, name } = cat;
				return (
					<styled.CatDiv>
						<styled.Link to={`/Category/${id}`}>
							<styled.Cat>{name}</styled.Cat>
						</styled.Link>
						<styled.TodoBox>
						{todoList.map((todo, j) => (
							<styled.Todo>{todo.name}</styled.Todo>
						))}
						</styled.TodoBox>
					</styled.CatDiv>
				)
			})}
			<AddModal add={add} setAdd={setAdd} />
		</styled.Div>
	)
}

export default Component;