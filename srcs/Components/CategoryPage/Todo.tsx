import * as React from 'react'

import * as styled from '../../Styles/CategoryPage'
import { Visible } from '../../Types/ModalVisible'

function Todo ({ kind, todos, func, todoFunc}) {
	const { setEdit, setDel, setDone } = func;
	const { todoEdit, todoDel, todoDone } = todoFunc;

	return (
		<styled.Todo>{kind}
			<styled.TodoBox>
				{todos.filter(todo => todo.state === false).map((todo, i) => (
						<styled.TodoItem key={i}>
							<p onClick={() => {
								setEdit({visible : Visible.EDIT, id : todo.id, func : todoEdit, data : { name : todo.name }})
							}}>{todo.name}</p> 
							{kind === "Todo" ? 
							<div>
								<styled.TodoButton onClick={() => setDone({visible : Visible.DONE, id : todo.id, func : todoDone})}>Done</styled.TodoButton>
								<styled.TodoButton onClick={() => setDel({visible : Visible.DEL, id : todo.id, func : todoDel})}>X</styled.TodoButton>
							</div>
							: null}
						</styled.TodoItem>
					))}
			</styled.TodoBox>
		</styled.Todo>
	)
}

export default Todo;