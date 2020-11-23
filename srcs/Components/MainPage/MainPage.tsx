import * as React from 'react'
import { category } from '../../Modules/Category'
import { todo } from '../../Modules/Todo'
import { Visible } from '../../Types' 
import AddModal from '../Modal/AddModal'

import * as styled from '../../Styles/MainPage'
import { Head, MenuBar } from '..'

type props = {
	categories : category[];
	todos : todo[];
	categoryAdd : (name) => void
}

function Component ({ categories, todos, categoryAdd } : props ) {
	const [ add, setAdd ] = React.useState<{}>({visible : Visible.NONE, func : () => {}});

	return (
		<styled.Div>
			<Head title="My Records" />
			<MenuBar menu="categories" 
				button={{ name : "+ New", onClick : () => setAdd({visible : Visible.ADD, func : categoryAdd})}}/>
			{categories.map((cat, i) => {
				const todoList = todos.filter(todo => todo.catId === cat.id);
				return (
					<styled.CatDiv>
						<styled.Link to={`/Category/${cat.id}`}>
							<styled.Cat>{cat.name}</styled.Cat>
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